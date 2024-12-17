package config

import (
	"os"

	"github.com/joho/godotenv"
)

// Load .env file if GO_ENV environment variable is not set
func LoadENV() error {
	goEnv := os.Getenv("GO_ENV")
	if goEnv == "" || goEnv == "development" {
		err := godotenv.Load()
		if err != nil {
			return err
		}
	}
	return nil
}
