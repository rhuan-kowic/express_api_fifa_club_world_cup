import { findAllClubs } from "../repositories/clubsRepository";

export const findAllClubsService = async () => {
  const data = await findAllClubs();
  let response = null;

  if (!data) {
    response = { statusCode: 204, message: "Not a club found." };
  } else {
    response = { statusCode: 200, message: data };
  }

  return response;
};
