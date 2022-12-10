"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MontyHall {
    constructor(changeTheChoice, numberOfDoors) {
        this.changeTheChoice = changeTheChoice;
        this.numberOfDoors = numberOfDoors;
        this.playMontyHall = () => {
            const selectedDoorIndex = Math.floor(Math.random() * this.numberOfDoors);
            let secondSelectedDoorIndex = null;
            const revealedDoorIndex = this.gameDoors.findIndex((door, index) => index !== this.carIndex && index !== selectedDoorIndex);
            if (this.changeTheChoice === true) {
                secondSelectedDoorIndex = this.gameDoors.findIndex((door, index) => index !== revealedDoorIndex && index !== selectedDoorIndex);
                this.gameResult =
                    secondSelectedDoorIndex === this.carIndex ? "Win" : "Failure";
            }
            else {
                // secondSelectedDoorIndex = null;
                this.gameResult = selectedDoorIndex === this.carIndex ? "Win" : "Failure";
            }
            const resultGame = {
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
        this.gameDoors = new Array(numberOfDoors);
        this.gameDoors.fill("Goat");
        this.gameResult = "Failure";
        this.carIndex = Math.floor(Math.random() * numberOfDoors);
        this.gameDoors[this.carIndex] = "Car";
    }
}
exports.default = MontyHall;
