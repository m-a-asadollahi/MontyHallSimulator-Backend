export type TDoorValue = "Goat" | "Car";

export type TGameResult = "Win" | "Failure";

export interface IGameInfo {
  doors: TDoorValue[];
  carIndex: number;
  selectedDoor: number;
  revealedDoor: number;
  gameResult: TGameResult;
  secondSelectedDoor?: number | null;
}
