import { Request, Response } from "express";
import {
  findAllClubsService,
  findByIdClubService,
  insertClubService,
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

export const insertClubController = async (req: Request, res: Response) => {
  const clubValue = req.body;
  const httpResponse = await insertClubService(clubValue);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};
