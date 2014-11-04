/*
 Levance Wamley
 Expression Personal Problem
 WPF 1411
 11-3-14
 */
alert("Your local clothing store is having a sale.\n The sale goes as follows: for every individual article of clothing over $40.You get 20 dollars off of each item.");


//Determine the final price after subtracting the sales price.
var item1 = prompt("What is the price of item 1");
console.log(item1);
var item2 = prompt("What is the price of item 2");
console.log(item2);
var item3 = prompt("What is the price of item 3");
console.log(item3);
var item4 = prompt("What is the price of item 4");
console.log(item4);

var checkOut = Number(item1) + Number(item2) + parseInt(item3) + parseInt(item4);
console.log(checkOut);
alert(" Your total came out to $"+checkOut+".");

//Calculate the amount of the sale.

var x = prompt("How many items did you buy that was over $40");
x*= 20;
console.log(x);
alert("The sale amount is $")+String(x);