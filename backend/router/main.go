package router

import (
	"github.com/gofiber/fiber/v2"
	"gitub.com/szyi10/f1dex/config"
	"gitub.com/szyi10/f1dex/handlers"
	"gitub.com/szyi10/f1dex/middlewares"
)

func SetupRoutes(app *fiber.App) {

	app.Get("/health", handlers.HandleHealthCheck)
	config.AddSwaggerRoutes(app)

	jwt := middlewares.NewAuthMiddleware(config.Secret)
	users := app.Group("/auth")
	users.Post("/login", handlers.HandleLogin)
	users.Post("register", handlers.HandleRegister)
	users.Get("/protected", jwt, handlers.HandleProtectedRoute)

	drivers := app.Group("/drivers")
	drivers.Get("/", handlers.HandleAllDrivers)
	drivers.Get("/search", handlers.HandleSearchDrivers)
	drivers.Get("/slug/:slug", handlers.HandleDriverBySlugName)
	drivers.Get("/:id", handlers.HandleDriverByID)

	app.Static("/", "./client/dist")
	app.Get("/*", func(c *fiber.Ctx) error {
		return c.SendFile("./client/dist/index.html")
	})

}
