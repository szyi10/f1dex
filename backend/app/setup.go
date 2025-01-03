package app

import (
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/fiber/v2/middleware/recover"
	"github.com/gofiber/template/html/v2"
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

	engine := html.New("./web/views", ".html")
	engine.AddFunc("dict", config.Dict)

	app := fiber.New(fiber.Config{
		Views: engine,
	})

	app.Use(recover.New())
	app.Use(logger.New(logger.Config{
		Format: "[${ip}]:${port} ${status} - ${method} ${path} ${latency}\n",
	}))
	app.Use(cors.New(cors.Config{AllowOrigins: "*", AllowHeaders: "Origin, Content-Type, Accept"}))

	router.SetupRoutes(app)

	port := os.Getenv("PORT")
	app.Listen(":" + port)

	return nil
}
