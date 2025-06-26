import { Router } from "express";
import {
  findAllClubsController,
  findByIdClubController,
  insertClubController,
} from "../controllers/clubsController";
import { findAllPlayersController, findByIdPlayerController, insertPlayerController } from "../controllers/playersController";

const router = Router();

router.get("/clubs", findAllClubsController);
router.get("/clubs/:id", findByIdClubController);
router.post("/clubs", insertClubController);

router.get("/players", findAllPlayersController);
router.get("/players/:id", findByIdPlayerController)
router.post("/players", insertPlayerController)

export default router;
