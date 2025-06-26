import { Request, Response } from "express";
import {
  findAllPlayersService,
  findByIdPlayerService,
} from "../services/playersService";

export const findAllPlayersController = async (req: Request, res: Response) => {
  const httpResponse = await findAllPlayersService();
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const findByIdPlayerController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const httpResponse = await findByIdPlayerService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};
