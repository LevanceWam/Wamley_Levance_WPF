/**
 * Created by vancewamley on 10/31/14.
 */

//Levance Wamley

//10/31/14

//Web Programming Fundamentals

//Section 1

//Assignment: Instructional Expressions

alert("Welcome to Day 3 problems page!");

//Slice of pizza part 1

//Calculate the amount of pizza slices eaten by each person.
var numberOfSlices = 8;
var numberOfPeople = 20;
var amountOrdered = 30;

//Find the total amount of pizza slices.
var slicesInAll = numberOfSlices * amountOrdered;
//multiply numberofslices*amountOrdered
var pizzaPerPerson = numberOfSlices * amountOrdered / numberOfPeople;

console.log("There were " +slicesInAll+" "+"slices of pizza in total.");

//Now find the amount of pizza each person ate.

//Divide totalPizzaSlices by numberOfPeople


console.log("Each Person ate"+" "+pizzaPerPerson+" "+"slices of pizza.");

//Slice of pizza part 2

//Find the amount of pizza sparky got

//Subtract totalPizzaSlices by numberOfPeople*slicesConsumed

var sparkySlices = numberOfSlices * amountOrdered % numberOfPeople;

console.log("In total sparky had "+sparkySlices);

//Average Shopping Bill
var week1 = 100;
var week2 = 50;
var week3 = 100;
var week4 = 50;
var week5 = 100;

//total amount spent = 5 week sum
var totalAmountSpent = week1 + week2 + week3 + week4 + week5;
console.log("Over 5 weeks I spent over $"+totalAmountSpent);

//Find average for weekly spending
var average = totalAmountSpent / 5; //5 is the number of weeks
console.log("My 5 week average comes out to $"+average);
//Results format
console.log("Over 5 weeks I spent $"+totalAmountSpent+" "+ "and my average is $"+average+" "+"per week.")

//Discount
var original = 20;
console.log("The original price of the item is $"+original);
var discount = 50;
var discountperc = discount / 100;
var description = "30 pack of gatorade";
var salesTax = 50.5;
var salesTaxPerc = salesTax / 100;


var withoutTax = original * discountperc;
var withTax = (withoutTax * salesTaxPerc) + withoutTax;
console.log("After buying my"+" "+description+"which was originally"+" "+original+",but after a"+" "+discount+"%, "+"it is now $"+withoutTax+", without tax and $"+withTax+" "+"with tax")





