import { Router } from "express";
import { findAllClubsController } from "../controllers/clubsController";

const router = Router();

router.get("/clubs", findAllClubsController);

export default router;
