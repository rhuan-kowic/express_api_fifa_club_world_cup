import { HttpResponse } from "../models/httpResponse";
import { PlayerModel } from "../models/PlayerModel";
import {
  findAllPlayers,
  findByIdPlayer,
  insertPlayer,
} from "../repositories/playersRepository";
import * as HttpHelper from "../utils/httpHelper";

export const findAllPlayersService = async (): Promise<HttpResponse> => {
  const data = await findAllPlayers();
  let response = null;
  if (!data || undefined) {
    response = HttpHelper.noContent();
  } else {
    response = HttpHelper.ok(data);
  }
  return response;
};

export const findByIdPlayerService = async (
  id: number
): Promise<HttpResponse> => {
  const data = await findByIdPlayer(id);
  let response = null;
  if (!data || undefined) {
    response = HttpHelper.noContent();
  } else {
    response = HttpHelper.ok(data);
  }
  return response;
};

export const insertPlayerService = async (
  player: PlayerModel
): Promise<HttpResponse> => {
  if (!player || Object.keys(player).length === 0) {
    return HttpHelper.badRequest("Player object is required");
  }

  const { id, name, position, number, id_club } = player;

  if (!Number.isInteger(id) || id <= 0) {
    return HttpHelper.badRequest("Invalid id");
  }

  if (typeof name !== "string" || name.length < 3) {
    return HttpHelper.badRequest("Invalid name");
  }

  const positions: string[] = [
    "Goalkeeper",
    "Defence",
    "Midfielder",
    "Forward",
  ];

  if (typeof position !== "string" || !positions.includes(position)) {
    return HttpHelper.badRequest("Invalid position");
  }

  if (!Number.isInteger(number) || number <= 0 || number > 99) {
    return HttpHelper.badRequest("Invalid number");
  }

  if (!Number.isInteger(id_club) || id_club <= 0) {
    return HttpHelper.badRequest("Invalid id_club");
  }

  await insertPlayer(player);
  return HttpHelper.created();
};
