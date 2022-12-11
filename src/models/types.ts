//* The type of each door.
export type TDoorValue = "Goat" | "Car";

//* The type of simulation result.
export type TSimulationResult = "Win" | "Failure";

//* The simulation result interface.
export interface ISimulationInfo {
  doors: TDoorValue[];
  carIndex: number;
  selectedDoor: number;
  revealedDoor: number;
  simulationResult: TSimulationResult;
  secondSelectedDoor?: number | null;
}
