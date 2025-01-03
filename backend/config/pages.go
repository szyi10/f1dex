package config

import (
	"log"

	"github.com/gofiber/fiber/v2"
)

func Dict(values ...interface{}) map[string]interface{} {
	if len(values)%2 != 0 {
		log.Fatal("dict function requires an even number of arguments")
	}

	d := make(map[string]interface{})
	for i := 0; i < len(values); i += 2 {
		key := values[i].(string)
		d[key] = values[i+1]
	}

	return d
}

func AddPagesRoutes(app *fiber.App) {
	app.Static("/", "./web/static")

	// Login View
	app.Get("/", func(c *fiber.Ctx) error {
		return c.Render("index", fiber.Map{
			"Title": "Home page",
		}, "layout/main")
	})

	// Dashboard Views (authorization is required)
	dashboard := app.Group("/admin")

	dashboard.Get("/", func(c *fiber.Ctx) error {
		return c.Render("dashboard", nil, "layout/main")
	})
}
