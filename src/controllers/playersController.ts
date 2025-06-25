import { Request, Response } from "express";
import { findAllPlayersService } from "../services/playersService";

export const findAllPlayersController = async (req: Request, res: Response) => {
  const httpResponse = await findAllPlayersService();
  res.status(httpResponse.statusCode).json(httpResponse.body);
};
