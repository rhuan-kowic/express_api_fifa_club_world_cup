import { HttpResponse } from "../models/httpResponse";
import { findAllClubs, findByIdClub } from "../repositories/clubsRepository";
import * as httpHelper from "../utils/httpHelper";

export const findAllClubsService = async (): Promise<HttpResponse> => {
  const data = await findAllClubs();
  let response = null;

  if (!data || data.length === 0) {
    response = await httpHelper.noContent();
  } else {
    response = await httpHelper.ok(data);
  }

  return response;
};

export const findByIdClubService = async (
  id: number
): Promise<HttpResponse> => {
  const data = await findByIdClub(id);
  let response = null;
  if (!data || data === undefined) {
    response = await httpHelper.notFound();
  } else {
    response = await httpHelper.ok(data);
  }

  return response;
};
