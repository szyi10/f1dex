package main

import "gitub.com/szyi10/f1dex/app"

// @title F1Dex API
// @version 1.1.0
// @description REST API of F1Dex application using Fiber and MongoDB
// @contact.name Szymon Kędzior
// @license.name MIT
// @host localhost:8080
// @BasePath /
func main() {
	err := app.SetupAndRunApp()
	if err != nil {
		panic(err)
	}
}
