//While Loop and For Loop


// From a While Loop to a For Loop II
// Morph your previous while loop into a for loop that uses the same variable names. 
//Remember, you’ll still need to declare the starting number of sheep and the number of months to print outside the loop. 
//We’ve given you the starting number of sheep again, as well as the amount of months you’ll need to print out for use in the loop parameters. 
//Here’s a solution for the previous while loop for reference:

var numSheep = 4;
var monthNumber = 1;
var monthsToPrint = 12;

while (monthNumber <= monthsToPrint) {
    numSheep = numSheep * 4;
    console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
    monthNumber++;
}

//  for Loops //

var numSheep = 4;
var monthsToPrint = 12;
for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {
    numSheep *= 4
    console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}




//Example 2//

// These Dam Loops!
// The Hoover Dam has 19 generators of multiple types. For simplicity, 
//let’s say that the first 4 of these generators output 62 megawatts, 
//and the other 15 output 124 megawatts. 
//the Dam Rangers have asked you to design a system of two loops that turns each generator on in progression, 
//and prints the new total of megawatts generated.

// They’d like the first loop to be a while loop handling the first 4 generators. Then, 
//they’d like the second loop to be a for loop that handles the other 15 generators. 
//Each output line should resemble the following lines, with adjusted values for the currentGen and totalMW:

// Generator #1 is on, adding 62 MW, for a total of 62 MW!
// Generator #2 is on, adding 62 MW, for a total of 124 MW!

var currentGen = 1;
var totalGen = 19;
var totalMW = 0;

while (currentGen <= 4) {
    totalMW += 62
    console.log("Generator # " + currentGen + " is on, adding 62 MW, for a total of " + totalMW + " MW!");
    currentGen++;
}


for (var i = 5; i <= 19; i++) {
    totalMW += 124
    console.log("Generator #" + i + " is on, adding 124 MW, for a total of " + totalMW + " MW!");
    currentGen++;
}
