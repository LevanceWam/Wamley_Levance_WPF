/*
Levance Wamley
Day 4 Arrrays
WPF 1411
11-3-2014
 */

//alert("testing to see if linked");

//basic Array
var avengersNames = ["Hulk","Spiderman","Iron Man"];
console.log(avengersNames);

// access a specific avenger in our array
console.log(avengersNames[1]);

//We can use a variable to rep our index number as well
var num = 2;

//Lets print
console.log(avengersNames[num]);



// Now lets add an avenger to the array
avengersNames[3] = "Thor";
console.log(avengersNames);

// Figure out the length of the array we solve this using the .length property
//dot syntax property put a period in it


console.log(avengersNames.length);

//add another avengers

avengersNames[avengersNames.length]="captian america";
console.log(avengersNames)
