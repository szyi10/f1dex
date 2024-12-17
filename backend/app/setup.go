package app

import (
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/fiber/v2/middleware/recover"
	"gitub.com/szyi10/f1dex/config"
	"gitub.com/szyi10/f1dex/database"
	"gitub.com/szyi10/f1dex/router"
)

func SetupAndRunApp() error {
	err := config.LoadENV()
	if err != nil {
		return err
	}

	err = database.StartMongoDB()
	if err != nil {
		return err
	}

	defer database.CloseMongoDB()

	app := fiber.New()

	app.Use(recover.New())
	app.Use(logger.New(logger.Config{
		Format: "[${ip}]:${port} ${status} - ${method} ${path} ${latency}\n",
	}))

	router.SetupRoutes(app)

	config.AddSwaggerRoutes(app)

	port := os.Getenv("PORT")
	app.Listen(":" + port)

	return nil
}
