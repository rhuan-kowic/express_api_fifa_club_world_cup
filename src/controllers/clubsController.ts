import { Request, Response } from "express";
import {
  findAllClubsService,
  findByIdClubService,
} from "../services/clubsService";

export const findAllClubsController = async (req: Request, res: Response) => {
  const httpResponse = await findAllClubsService();
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const findByIdClubController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const httpResponse = await findByIdClubService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};
