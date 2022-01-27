/*
Programmer: Vance Clark
Team Member: Aidan Howard
Date: 1.26.2022
Program: We will be making a program to go through a Haunted Mansion Maze filled with Haunted Sounds, Changing of colors, and other obstacles along the way using a Sphero Bolt and Java Script
*/

async function startProgram() {
	// Write code here
	await speak('Start', true)
	await roll(0,60,2);
	setMainLed({ r: 0, g: 0, b: 225 })
	
}

