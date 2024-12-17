# F1Dex Backend

REST API of F1Dex application using Fiber and MongoDB

## Getting Started

### Prerequisites

- [GoLang](https://golang.org/doc/install)
- [MongoDB](https://docs.mongodb.com/manual/installation/)

### Installing

1. Install extra packages:
   `go install github.com/air-verse/air@latest`
   `go install github.com/swaggo/swag/cmd/swag@latest`
2. Clone the repo
3. Create your own .env file
4. `make dev`
5. view docs at http://localhost:8080/swagger

### Scripts

- `make dev` - runs the server in development mode
- `make docs` - generates the swagger docs
