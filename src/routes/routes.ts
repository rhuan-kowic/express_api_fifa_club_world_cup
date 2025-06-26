import { Router } from "express";
import {
  findAllClubsController,
  findByIdClubController,
  insertClubController,
} from "../controllers/clubsController";
import { findAllPlayersController, findByIdPlayerController } from "../controllers/playersController";

const router = Router();

router.get("/clubs", findAllClubsController);
router.get("/clubs/:id", findByIdClubController);
router.post("/clubs", insertClubController);

router.get("/players", findAllPlayersController);
router.get("/players/:id", findByIdPlayerController)

export default router;
