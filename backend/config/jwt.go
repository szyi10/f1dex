package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

var Secret string

func init() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	Secret = os.Getenv("JWT_SECRET")
	if Secret == "" {
		log.Fatal("JWT_SECRET must be set")
	}
}
