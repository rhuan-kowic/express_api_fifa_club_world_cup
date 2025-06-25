import { Request, Response } from "express";
import { findAllClubsService } from "../services/clubsService";

export const findAllClubsController = async (req: Request, res: Response) => {
  const httpResponse = await findAllClubsService();
  res.status(httpResponse.statusCode).json(httpResponse.body);
};
