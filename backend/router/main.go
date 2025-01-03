package router

import (
	"github.com/gofiber/fiber/v2"
	"gitub.com/szyi10/f1dex/config"
	"gitub.com/szyi10/f1dex/handlers"
	"gitub.com/szyi10/f1dex/middlewares"
)

func SetupRoutes(app *fiber.App) {

	// Config Routes
	config.AddSwaggerRoutes(app)
	config.AddPagesRoutes(app)

	// Middlewares
	jwt := middlewares.NewAuthMiddleware(config.Secret)

	// Api Routes
	api := app.Group("/api")

	v1 := api.Group("/v1")
	v1.Get("/health", handlers.HandleHealthCheck)

	auth := v1.Group("/auth")
	auth.Post("/login", handlers.HandleLogin)
	auth.Post("/regiter", jwt, handlers.HandleRegister)
	auth.Get("/protected", jwt, handlers.HandleProtectedRoute)

	drivers := v1.Group("/drivers")
	drivers.Get("/", handlers.HandleAllDrivers)
	drivers.Get("/search", handlers.HandleSearchDrivers)
	drivers.Get("/slug/:slug", handlers.HandleDriverBySlugName)
	drivers.Get("/:id", handlers.HandleDriverByID)
}
