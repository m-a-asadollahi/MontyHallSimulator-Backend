"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const montyHallSimulation_1 = require("../controllers/montyHallSimulation");
const router = (0, express_1.Router)();
//*@ desc Get all simulations
//*@ route GET -> /:id:changeChoise
router.get("/:count/:changeChoise", montyHallSimulation_1.simulateGame);
exports.default = router;
