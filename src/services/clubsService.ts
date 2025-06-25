import { ClubModel } from "../models/clubsModel";
import { HttpResponse } from "../models/httpResponse";
import {
  findAllClubs,
  findByIdClub,
  insertClub,
} from "../repositories/clubsRepository";
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

export const insertClubService = async (
  club: ClubModel
): Promise<HttpResponse> => {
  if (!club || Object.keys(club).length === 0) {
    return httpHelper.badRequest("Club object is required");
  }

  const { id, name, country } = club;

  if (Number.isInteger(id) || id <= 0) {
    return httpHelper.badRequest("Invalid id");
  }

  if (typeof name !== "string" || name.length < 3) {
    return httpHelper.badRequest("Invalid name");
  }

  if (typeof country !== "string" || country.length < 3) {
    return httpHelper.badRequest("Invalid country");
  }

  await insertClub(club);
  return httpHelper.created();
};
