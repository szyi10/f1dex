package handlers

import (
	"github.com/gofiber/fiber/v2"
	"gitub.com/szyi10/f1dex/database"
	"gitub.com/szyi10/f1dex/models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// @Summary Get all drivers.
// @Description fetch every driver available.
// @Tags drivers
// @Accept */*
// @Produce json
// @Success 200 {object} []models.Driver
// @Router /drivers [get]
func HandleAllDrivers(c *fiber.Ctx) error {
	coll := database.GetCollection("drivers")

	filter := bson.M{}
	opts := options.Find().SetSkip(0).SetLimit(30)

	cursor, err := coll.Find(c.Context(), filter, opts)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"internal server error": err.Error()})
	}

	drivers := make([]models.Driver, 0)
	if err = cursor.All(c.Context(), &drivers); err != nil {
		return c.Status(500).JSON(fiber.Map{"internal server error": err.Error()})
	}

	return c.Status(200).JSON(drivers)
}
