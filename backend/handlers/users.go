package handlers

import (
	"context"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v4"
	"gitub.com/szyi10/f1dex/config"
	"gitub.com/szyi10/f1dex/database"
	"gitub.com/szyi10/f1dex/models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"golang.org/x/crypto/bcrypt"
)

// @Summary Register a new user
// @Description Registers a new user with a username and password
// @Tags Auth
// @Accept json
// @Produce json
// @Param request body models.RegisterRequest true "Register Request"
// @Success 201 {object} models.SuccessResponse "User registered successfully"
// @Failure 400 {object} models.ErrorResponse "Invalid request body"
// @Failure 500 {object} models.ErrorResponse "Internal server error"
// @Router /auth/register [post]
func HandleRegister(c *fiber.Ctx) error {
	var req models.RegisterRequest
	if err := c.BodyParser(&req); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid request body",
		})
	}

	hashedPassword, err := hashPassword(req.Password)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to hash password",
		})
	}

	newUser := models.User{
		ID:       primitive.NewObjectID(),
		Username: req.Username,
		Password: hashedPassword,
	}

	coll := database.GetCollection("users")
	_, err = coll.InsertOne(context.TODO(), newUser)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to create user",
		})
	}

	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
		"message": "User registered successfully",
	})
}

// @Summary Authenticate user
// @Description Logs in a user and returns a JWT token
// @Tags Auth
// @Accept json
// @Produce json
// @Param request body models.LoginRequest true "Login Request"
// @Success 200 {object} models.SuccessResponse "JWT token"
// @Failure 400 {object} models.ErrorResponse "Invalid request body"
// @Failure 401 {object} models.ErrorResponse "Invalid credentials"
// @Failure 500 {object} models.ErrorResponse "Failed to generate token"
// @Router /auth/login [post]
func HandleLogin(c *fiber.Ctx) error {
	var req models.LoginRequest
	if err := c.BodyParser(&req); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid request body",
		})
	}

	var user models.User
	coll := database.GetCollection("users")
	filter := bson.M{"username": req.Username}

	err := coll.FindOne(context.Background(), filter).Decode(&user)
	if err != nil {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"error": "Invalid credentials",
		})
	}

	if !checkPassword(req.Password, user.Password) {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"error": "Invalid credentials",
		})
	}

	day := 24 * time.Hour
	claims := jwt.MapClaims{
		"ID":       user.ID,
		"username": user.Username,
		"exp":      time.Now().Add(day * 1).Unix(),
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	t, err := token.SignedString([]byte(config.Secret))
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	return c.JSON(models.LoginResponse{
		Token: t,
	})
}

// @Summary Protected route
// @Description A test route accessible only to authenticated users
// @Tags Auth
// @Produce json
// @Success 200 {object} models.SuccessResponse "Hello message with username"
// @Failure 401 {object} models.ErrorResponse "Unauthorized"
// @Router /auth/protected [get]
func HandleProtectedRoute(c *fiber.Ctx) error {
	user := c.Locals("user").(*jwt.Token)
	claims := user.Claims.(jwt.MapClaims)
	return c.JSON(fiber.Map{
		"message": "Hello, " + claims["username"].(string),
	})
}

func hashPassword(password string) (string, error) {
	hashed, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	return string(hashed), err
}

func checkPassword(password, hashed string) bool {
	return bcrypt.CompareHashAndPassword([]byte(hashed), []byte(password)) == nil
}
