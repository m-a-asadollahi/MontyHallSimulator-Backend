import { Router } from "express";
import { simulateGame } from "../controllers/montyHallSimulation";

const router = Router();

router.get("/:count/:changeChoise", simulateGame);

export default router;
