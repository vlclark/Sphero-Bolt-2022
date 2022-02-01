/*
Programmer: Vance Clark
Team Member: Aidan Howard
Date: 1.26.2022
Program: We will be making a program to go through a Haunted Mansion Maze filled with Haunted Sounds, Changing of colors, and other obstacles along the way using a Sphero Bolt and Java Script
*/

async function startProgram() {
	// Write code here
	// Says start and rolls the first stretch
	
	await speak('Start', true)
	await roll(0,60,2);
	
	// Set LED blue and goes to sound checkpoint 
	
	setMainLed({ r: 0, g: 0, b: 255 })
	await roll(50, 30, 2)
	await roll(90, 30, 2)
	
	// Plays monkey sound and goes to red checkpoint
	
	await Sound.Animal.Monkey.play(true)
	await roll(25,-29,2);
	setMainLedainled({ r:255, g: 0, b: 0})
	await roll(75,29,3);

	
}

