package handlers

import (
	"github.com/gofiber/fiber/v2"
	"gitub.com/szyi10/f1dex/database"
	"gitub.com/szyi10/f1dex/models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
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

	// Query params
	sortBy := c.Query("sortBy", "name")

	order := c.Query("order", "asc")

	filter := bson.M{}

	opts := options.Find().SetSkip(0).SetLimit(30)
	if order == "asc" {
		opts.SetSort(bson.D{{Key: sortBy, Value: 1}})
	} else {
		opts.SetSort(bson.D{{Key: sortBy, Value: -1}})
	}

	cursor, err := coll.Find(c.Context(), filter, opts)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": err.Error()})
	}

	drivers := make([]models.Driver, 0)
	if err = cursor.All(c.Context(), &drivers); err != nil {
		return c.Status(500).JSON(fiber.Map{"internal server error": err.Error()})
	}

	return c.Status(200).JSON(drivers)
}

// @Summary Get driver by ID.
// @Description fetch a driver by their ID.
// @Tags drivers
// @Accept */*
// @Produce json
// @Param id path string true "Driver ID"
// @Param sortBy query string false "Sort by" Enums(name, currentSeason.pointScored)
// @Param order query string false "Order" Enums(asc, desc)
// @Success 200 {object} models.Driver
// @Router /drivers/{id} [get]
func HandleDriverByID(c *fiber.Ctx) error {
	id := c.Params("id")

	dbId, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return c.Status(400).JSON(fiber.Map{"error": err.Error()})
	}

	coll := database.GetCollection("drivers")
	filter := bson.M{"_id": dbId}
	var driver models.Driver

	err = coll.FindOne(c.Context(), filter).Decode(&driver)
	if err != nil {
		return c.Status(404).JSON(fiber.Map{"error": err.Error()})
	}

	return c.Status(200).JSON(driver)
}

// @Summary Get driver by slug name.
// @Description fetch a driver by their slug name.
// @Tags drivers
// @Accept */*
// @Produce json
// @Param slug path string true "Driver Slug Name"
// @Success 200 {object} models.Driver
// @Router /drivers/slug/{slug} [get]
func HandleDriverBySlugName(c *fiber.Ctx) error {
	slug := c.Params("slug")

	coll := database.GetCollection("drivers")
	filter := bson.M{"slug": slug}
	var driver models.Driver

	err := coll.FindOne(c.Context(), filter).Decode(&driver)
	if err != nil {
		return c.Status(404).JSON(fiber.Map{"error": err.Error()})
	}

	return c.Status(200).JSON(driver)
}

// @Summary Search drivers.
// @Description search drivers by name
// @Tags drivers
// @Accept */*
// @Produce json
// @Param query query string true "Search query"
// @Param sortBy query string false "Sort by" Enums(name, currentSeason.pointScored)
// @Param order query string false "Order" Enums(asc, desc)
// @Success 200 {object} []models.Driver
// @Router /drivers/search [get]
func HandleSearchDrivers(c *fiber.Ctx) error {
	coll := database.GetCollection("drivers")

	query := c.Query("query")
	sortBy := c.Query("sortBy", "currentSeason.pointScored")
	order := c.Query("order", "desc")

	filter := bson.M{
		"$or": []bson.M{
			{"name": bson.M{"$regex": query, "$options": "i"}},
			{"nationality": bson.M{"$regex": query, "$options": "i"}},
			{"team": bson.M{"$regex": query, "$options": "i"}},
		},
	}

	opts := options.Find().SetSkip(0).SetLimit(30)
	if order == "asc" {
		opts.SetSort(bson.D{{Key: sortBy, Value: 1}})
	} else {
		opts.SetSort(bson.D{{Key: sortBy, Value: -1}})
	}

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
