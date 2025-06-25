import { HttpResponse } from "../models/httpResponse";
import { findAllPlayers } from "../repositories/playersRepository";
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
