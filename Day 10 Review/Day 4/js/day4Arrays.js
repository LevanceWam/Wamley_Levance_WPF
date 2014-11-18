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
//console.log(avengersNames[1]);

//We can use a variable to rep our index number as well
//var num = 2;

//Lets print
//console.log(avengersNames[num]);

// Now lets add an avenger to the array
avengersNames[3] = "Thor";
//console.log(avengersNames);

// Figure out the length of the array we solve this using the .length property
//dot syntax property put a period in it

console.log(avengersNames.length);

//add another avengers
avengersNames[avengersNames.length]="Captain America";
//console.log(avengersNames);

//add black window
avengersNames[avengersNames.length]= "Black Window";

//Access the last avenger in index
//console.log(avengersNames[avengersNames.length -1]);

// New Method specific to arrays called push
//it adds whatever we put in automatically to the end of our array.
avengersNames.push("Hawkeye");
console.log(avengersNames);
avengersNames.push("Iron Patriot");
avengersNames.push("Fantastic 4");
avengersNames.push("Silver Surfer");
avengersNames.push("Wolverine");
avengersNames.push("Ghost Rider");
avengersNames[1]="Captain marvel";
avengersNames.push("She Hulk");
avengersNames.push("Ant Man");
avengersNames.push("Wasp");
avengersNames.push(("Scarlet Witch"));
avengersNames.push("Quicksilver");
avengersNames.push("Falcon");
avengersNames.push("Squirrel Girl");


for(var i=0;i<avengersNames.length;i++){
    console.log("Assemble Avenger member "+avengersNames[i])
}







//pop - method of an array that removes the last item in array
// you can save the pop variable if you want to
//set a variable equal to the pop method
//var soloAvenger = avengersNames.pop();
//console.log(avengersNames);
//console.log(soloAvenger);

//Pick oranges every day
//Track how many oranges are picked in each day
var orangeBins = [234, 473, 20, 709];

//How many oranges were picked in total
// store that in a variable
var orangeTotal = orangeBins[0] + orangeBins[1] + orangeBins[2] + orangeBins[3];
console.log(orangeTotal+" is the total number of oranges picked.");

//
var orangeAverage = orangeTotal/orangeBins.length;
console.log("the average amount of oranges picked in "+orangeBins.length+" days is "+orangeAverage+".");