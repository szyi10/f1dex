package models

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type CurrentSeason struct {
	Wins          int `bson:"wins" json:"wins"`
	PolePositions int `bson:"polePositions" json:"polePositions"`
	FastestLaps   int `bson:"fastestLaps" json:"fastestLaps"`
	Podiums       int `bson:"podiums" json:"podiums"`
	PointScored   int `bson:"pointScored" json:"pointScored"`
}

type Badge struct {
	Label string `bson:"label" json:"label"`
	Color string `bson:"color" json:"color"`
}

type Driver struct {
	ID                primitive.ObjectID `bson:"_id,omitempty" json:"id"`
	Name              string             `bson:"name" json:"name"`
	Team              string             `bson:"team" json:"team"`
	Number            int                `bson:"number" json:"number"`
	Portrait          string             `bson:"portrait" json:"portrait"`
	Photos            []string           `bson:"photos" json:"photos"`
	TailwindColor     string             `bson:"tailwindColor" json:"tailwindColor"`
	Bio               string             `bson:"bio" json:"bio"`
	FullBiography     []string           `bson:"fullBiography" json:"fullBiography"`
	Country           string             `bson:"country" json:"country"`
	PlaceOfBirth      string             `bson:"placeOfBirth" json:"placeOfBirth"`
	DateOfBirth       string             `bson:"dateOfBirth" json:"dateOfBirth"`
	Age               int                `bson:"age" json:"age"`
	Height            float64            `bson:"height" json:"height"`
	Weight            float64            `bson:"weight" json:"weight"`
	Wins              int                `bson:"wins" json:"wins"`
	PolePositions     int                `bson:"polePositions" json:"polePositions"`
	FastestLaps       int                `bson:"fastestLaps" json:"fastestLaps"`
	Podiums           int                `bson:"podiums" json:"podiums"`
	GPEntered         int                `bson:"gpEntered" json:"gpEntered"`
	Retirements       int                `bson:"retirements" json:"retirements"`
	PointsScored      float64            `bson:"pointsScored" json:"pointsScored"`
	WorldChampionship int                `bson:"worldChampionship" json:"worldChampionship"`
	Badges            []Badge            `bson:"badges" json:"badges"`
	CurrentSeason     CurrentSeason      `bson:"currentSeason" json:"currentSeason"`
	Slug              string             `bson:"slug" json:"slug"`
}
