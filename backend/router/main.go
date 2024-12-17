package router

import (
	"github.com/gofiber/fiber/v2"
	"gitub.com/szyi10/f1dex/handlers"
)

func SetupRoutes(app *fiber.App) {
	app.Get("/health", handlers.HandleHealthCheck)

	drivers := app.Group("/drivers")
	drivers.Get("/", handlers.HandleAllDrivers)
}
