package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type RegisterRequest struct {
	Username string `bson:"username" json:"username"`
	Password string `bson:"password" json:"password"`
}

type LoginRequest struct {
	Username string `bson:"username" json:"username"`
	Password string `bson:"password" json:"password"`
}

type LoginResponse struct {
	Token string `bson:"token" json:"token"`
}

type User struct {
	ID       primitive.ObjectID `bson:"_id,omitempty"`
	Username string             `bson:"username"`
	Password string             `bson:"password"`
}
