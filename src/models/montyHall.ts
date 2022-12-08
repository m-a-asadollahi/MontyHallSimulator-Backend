import { IGameInfo, TDoorValue, TGameResult } from "./types";

export default class MontyHall {
  private carIndex: number;
  private gameDoors: TDoorValue[];
  private gameResult: TGameResult;

  constructor(public changeTheChoice: boolean, public numberOfDoors: number) {
    this.gameDoors = new Array<TDoorValue>(numberOfDoors);
    this.gameDoors.fill("Goat");
    this.gameResult = "Failure";
    this.carIndex = Math.floor(Math.random() * numberOfDoors);
    this.gameDoors[this.carIndex] = "Car";
  }

  public playMontyHall = (): IGameInfo => {
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
      this.gameResult =
        secondSelectedDoorIndex === this.carIndex ? "Win" : "Failure";
    } else {
      // secondSelectedDoorIndex = null;
      this.gameResult = selectedDoorIndex === this.carIndex ? "Win" : "Failure";
    }

    const resultGame: IGameInfo = {
      carIndex: this.carIndex,
      doors: this.gameDoors,
      gameResult: this.gameResult,
      revealedDoor: revealedDoorIndex,
      selectedDoor: selectedDoorIndex,
      secondSelectedDoor: this.changeTheChoice
        ? secondSelectedDoorIndex
        : undefined,
    };
    return resultGame;
  };
}
