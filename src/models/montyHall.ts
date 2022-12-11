import { ISimulationInfo, TDoorValue, TSimulationResult } from "./types";

//* simulator class
/**
 this class simulates the Monty hall game. 
 There are game doors and indexes for the selected door, the revealed door, and the second selected door. 
 there is a random process to create all indexes.
 */
export default class MontyHall {
  private carIndex: number;
  private gameDoors: TDoorValue[];
  private simulationResult: TSimulationResult;

  constructor(public changeTheChoice: boolean, public numberOfDoors: number) {
    this.gameDoors = new Array<TDoorValue>(numberOfDoors);
    this.gameDoors.fill("Goat");
    this.simulationResult = "Failure";
    this.carIndex = Math.floor(Math.random() * numberOfDoors);
    this.gameDoors[this.carIndex] = "Car";
  }
  //* This function runs for each simulation and returns the indexes and the result of the simulation.
  public playMontyHall = (): ISimulationInfo => {
    const selectedDoorIndex = Math.floor(Math.random() * this.numberOfDoors);
    let secondSelectedDoorIndex: null | number = null;

    const revealedDoorIndex = this.gameDoors.findIndex(
      (door, index) => index !== this.carIndex && index !== selectedDoorIndex
    );

    if (this.changeTheChoice === true) {
      secondSelectedDoorIndex = this.gameDoors.findIndex(
        (door, index) =>
          index !== revealedDoorIndex && index !== selectedDoorIndex
      );
      this.simulationResult =
        secondSelectedDoorIndex === this.carIndex ? "Win" : "Failure";
    } else {
      this.simulationResult =
        selectedDoorIndex === this.carIndex ? "Win" : "Failure";
    }

    const resultGame: ISimulationInfo = {
      carIndex: this.carIndex,
      doors: this.gameDoors,
      simulationResult: this.simulationResult,
      revealedDoor: revealedDoorIndex,
      selectedDoor: selectedDoorIndex,
      secondSelectedDoor: this.changeTheChoice
        ? secondSelectedDoorIndex
        : undefined,
    };
    return resultGame;
  };
}
