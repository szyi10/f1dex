interface CurrentSeason {
  wins: number;
  polePositions: number;
  fastestLaps: number;
  podiums: number;
  pointScored: number;
}

export interface Badge {
  label: string;
  color: string;
}

export interface Driver {
  id: string;
  name: string;
  team: string;
  number: number;
  portrait: string;
  photos: string[];
  tailwindColor: string;
  bio: string;
  fullBiography: string[];
  country: string;
  placeOfBirth: string;
  dateOfBirth: string;
  age: number;
  height: number;
  weight: number;
  wins: number;
  polePositions: number;
  fastestLaps: number;
  podiums: number;
  gpEntered: number;
  retirements: number;
  pointsScored: number;
  worldChampionship: number;
  badges: Badge[];
  currentSeason: CurrentSeason;
  slug: string;
}
