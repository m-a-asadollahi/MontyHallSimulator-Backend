import { Router } from "express";
import { simulateGame } from "../controllers/montyHallSimulation";

const router = Router();

//*@ desc Get all simulations
//*@ route GET -> /:id:changeChoise
router.get("/:count/:changeChoise", simulateGame);

export default router;
