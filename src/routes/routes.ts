import { Router } from "express";
import {
  findAllClubsController,
  findByIdClubController,
  insertClubController,
} from "../controllers/clubsController";

const router = Router();

router.get("/clubs", findAllClubsController);
router.get("/clubs/:id", findByIdClubController);
router.post("/clubs", insertClubController);

export default router;
