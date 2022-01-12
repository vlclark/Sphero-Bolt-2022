/*
Programmer: Vance Clark
Date: 1.12.2022
Program: This is a sandbox where I am learning multiple things with the Sphero Bolt. I will be experimenting with Java and Sphero.
*/


async function startProgram() {
	// Write code here
	await speak('Hello World!', true);
	setMainLed({ r:225, g: 0, b: 0});
	await roll(0,50,2);
}

