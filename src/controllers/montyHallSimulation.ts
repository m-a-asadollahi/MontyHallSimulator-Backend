import { RequestHandler } from "express";
import MontyHallSimulationDto from "../dtos/montyHallSimulation";
import MontyHall from "../models/montyHall";
import { IGameInfo } from "../models/types";

export const simulateGame: RequestHandler = (req, res, next) => {
  const numberOfSimulations = parseInt(req.params.count);
  const changeTheChoice = req.params.changeChoise === "true";
  const simulations: IGameInfo[] = [];

  for (let i = 0; i < numberOfSimulations; i++) {
    const montyHallGame = new MontyHall(changeTheChoice, 3);
    const gameResult = montyHallGame.playMontyHall();
    simulations.push(gameResult);
  }

  res.status(200).json(simulations);
};
