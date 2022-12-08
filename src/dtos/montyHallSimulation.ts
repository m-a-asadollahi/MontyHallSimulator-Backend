/*************************************************
The game simulation data transfer object.
This is an object that the sever is given.
Including :
the number of times that the simulator has to run.
whether or not to change the door.
**************************************************/
export default interface MontyHallSimulationDto {
  numberOfGames: number;
  changeTheChoice: boolean;
}
