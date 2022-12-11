"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//* simulator class
/**
 this class simulates the Monty hall game.
 There are game doors and indexes for the selected door, the revealed door, and the second selected door.
 there is a random process to create all indexes.
 */
class MontyHall {
    constructor(changeTheChoice, numberOfDoors) {
        this.changeTheChoice = changeTheChoice;
        this.numberOfDoors = numberOfDoors;
        //* This function runs for each simulation and returns the indexes and the result of the simulation.
        this.playMontyHall = () => {
            const selectedDoorIndex = Math.floor(Math.random() * this.numberOfDoors);
            let secondSelectedDoorIndex = null;
            const revealedDoorIndex = this.gameDoors.findIndex((door, index) => index !== this.carIndex && index !== selectedDoorIndex);
            if (this.changeTheChoice === true) {
                secondSelectedDoorIndex = this.gameDoors.findIndex((door, index) => index !== revealedDoorIndex && index !== selectedDoorIndex);
                this.simulationResult =
                    secondSelectedDoorIndex === this.carIndex ? "Win" : "Failure";
            }
            else {
                this.simulationResult =
                    selectedDoorIndex === this.carIndex ? "Win" : "Failure";
            }
            const resultGame = {
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
        this.gameDoors = new Array(numberOfDoors);
        this.gameDoors.fill("Goat");
        this.simulationResult = "Failure";
        this.carIndex = Math.floor(Math.random() * numberOfDoors);
        this.gameDoors[this.carIndex] = "Car";
    }
}
exports.default = MontyHall;
