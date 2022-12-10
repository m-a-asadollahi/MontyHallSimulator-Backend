"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.simulateGame = void 0;
const montyHall_1 = __importDefault(require("../models/montyHall"));
const simulateGame = (req, res, next) => {
    const numberOfSimulations = parseInt(req.params.count);
    const changeTheChoice = req.params.changeChoise === "true";
    const simulations = [];
    for (let i = 0; i < numberOfSimulations; i++) {
        const montyHallGame = new montyHall_1.default(changeTheChoice, 3);
        const gameResult = montyHallGame.playMontyHall();
        simulations.push(gameResult);
    }
    res.status(200).json(simulations);
};
exports.simulateGame = simulateGame;
