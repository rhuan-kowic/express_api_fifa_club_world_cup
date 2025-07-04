import { PlayerModel } from "../models/PlayerModel";

const database: PlayerModel[] = [
  { id: 1, name: "Weverton", position: "Goalkeeper", number: 23, id_club: 14 },
  {
    id: 2,
    name: "Gustavo Gómez",
    position: "Defence",
    number: 15,
    id_club: 14,
  },
  {
    id: 3,
    name: "Raphael Veiga",
    position: "Midfield",
    number: 10,
    id_club: 14,
  },
  { id: 4, name: "Estêvão", position: "Forward", number: 19, id_club: 14 },
  {
    id: 5,
    name: "Marcelo Lomba",
    position: "Goalkeeper",
    number: 12,
    id_club: 14,
  },
  { id: 6, name: "Paulinho", position: "Forward", number: 29, id_club: 14 },
  { id: 7, name: "Thiago Silva", position: "Defence", number: 2, id_club: 16 },
  { id: 8, name: "Ganso", position: "Midfield", number: 25, id_club: 16 },
  { id: 9, name: "Fábio", position: "Goalkeeper", number: 1, id_club: 16 },
  { id: 10, name: "Yan Couto", position: "Defence", number: 27, id_club: 9 },
  {
    id: 11,
    name: "Erling Haaland",
    position: "Forward",
    number: 9,
    id_club: 9,
  },
  {
    id: 12,
    name: "Hugo Lloris",
    position: "Goalkeeper",
    number: 1,
    id_club: 23,
  },
  {
    id: 13,
    name: "Olivier Giroud",
    position: "Forward",
    number: 9,
    id_club: 23,
  },
  {
    id: 14,
    name: "Darío Benedetto",
    position: "Forward",
    number: 9,
    id_club: 18,
  },
  { id: 15, name: "Éder Militão", position: "Defence", number: 3, id_club: 2 },
  {
    id: 16,
    name: "Vinícius Júnior",
    position: "Forward",
    number: 7,
    id_club: 2,
  },
  {
    id: 17,
    name: "Karim Benamebé",
    position: "Midfield",
    number: 8,
    id_club: 2,
  },
  { id: 18, name: "Ederson", position: "Goalkeeper", number: 31, id_club: 1 },
  {
    id: 19,
    name: "Kevin De Bruyne",
    position: "Midfield",
    number: 17,
    id_club: 1,
  },
  {
    id: 20,
    name: "Jude Bellingham",
    position: "Midfield",
    number: 22,
    id_club: 1,
  },
  { id: 21, name: "Malcom", position: "Midfield", number: 11, id_club: 29 },
  { id: 22, name: "Renan Lodi", position: "Defence", number: 13, id_club: 29 },
  { id: 23, name: "Sergio Ramos", position: "Defence", number: 4, id_club: 21 },
  { id: 24, name: "Marquinhos", position: "Defence", number: 5, id_club: 5 },
  { id: 25, name: "Paulo Dybala", position: "Forward", number: 10, id_club: 6 },
  { id: 26, name: "Mats Hummels", position: "Defence", number: 15, id_club: 9 },
  {
    id: 27,
    name: "Islam Slimani",
    position: "Forward",
    number: 9,
    id_club: 25,
  },
  {
    id: 28,
    name: "Marcelo Grohe",
    position: "Goalkeeper",
    number: 12,
    id_club: 18,
  },
  {
    id: 29,
    name: "Paulo Henrique Ganso",
    position: "Midfield",
    number: 28,
    id_club: 16,
  },
  {
    id: 30,
    name: "Denis Bouanga",
    position: "Forward",
    number: 11,
    id_club: 23,
  },
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return database;
};

export const findByIdPlayer = async (
  id: number
): Promise<PlayerModel | undefined> => {
  return database.find((player) => player.id === id);
};

export const insertPlayer = async (player: PlayerModel) => {
  database.push(player);
};
