import { Router } from "express";
import {
  findAllClubsController,
  findByIdClubController,
} from "../controllers/clubsController";

const router = Router();

router.get("/clubs", findAllClubsController);
router.get("/clubs/:id", findByIdClubController);

export default router;
