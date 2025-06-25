import { ClubModel } from "../models/clubsModel";

const database: ClubModel[] = [
  { id: 1, name: "Manchester City", country: "England" },
  { id: 2, name: "Real Madrid", country: "Spain" },
  { id: 3, name: "Chelsea", country: "England" },
  { id: 4, name: "Bayern Munich", country: "Germany" },
  { id: 5, name: "Paris Saint‑Germain", country: "France" },
  { id: 6, name: "Inter Milan", country: "Italy" },
  { id: 7, name: "Porto", country: "Portugal" },
  { id: 8, name: "Benfica", country: "Portugal" },
  { id: 9, name: "Borussia Dortmund", country: "Germany" },
  { id: 10, name: "Juventus", country: "Italy" },
  { id: 11, name: "Atlético Madrid", country: "Spain" },
  { id: 12, name: "Red Bull Salzburg", country: "Austria" },
  { id: 13, name: "Auckland City FC", country: "New Zealand" },
  { id: 14, name: "Palmeiras", country: "Brazil" },
  { id: 15, name: "Flamengo", country: "Brazil" },
  { id: 16, name: "Fluminense", country: "Brazil" },
  { id: 17, name: "River Plate", country: "Argentina" },
  { id: 18, name: "Boca Juniors", country: "Argentina" },
  { id: 19, name: "Botafogo", country: "Brazil" },
  { id: 20, name: "Inter Miami CF", country: "USA" },
  { id: 21, name: "Monterrey", country: "Mexico" },
  { id: 22, name: "Seattle Sounders FC", country: "USA" },
  { id: 23, name: "Los Angeles FC", country: "USA" },
  { id: 24, name: "Pachuca", country: "Mexico" },
  { id: 25, name: "Al Ahly", country: "Egypt" },
  { id: 26, name: "Wydad AC", country: "Morocco" },
  { id: 27, name: "Esperance de Tunis", country: "Tunisia" },
  { id: 28, name: "Mamelodi Sundowns", country: "South Africa" },
  { id: 29, name: "Al Hilal", country: "Saudi Arabia" },
  { id: 30, name: "Urawa Red Diamonds", country: "Japan" },
  { id: 31, name: "Al Ain", country: "United Arab Emirates" },
  { id: 32, name: "Ulsan HD", country: "South Korea" },
];

export const findAllClubs = async (): Promise<ClubModel[]> => {
  return database;
};

