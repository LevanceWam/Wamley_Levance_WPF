 /*
Levance Wamley
Group 1 Problems
WPF 1411
11-5-2014
 */
//alert ("hello");

 //Last Chance for gas

 var gas = prompt("what is your fuel efficiency");
 var gauge =("What is the % of fuel do you have");
 var tank = ("How many gallons do you have");

 var mpg = (gauge/100)*tank*gas;

 if ( mpg >= 200){
console.log("You're good on gas you can make it. ")
 } else{
  console.log("Please proceed to get gas because in "+mpg+" miles you are going to need to get gas and you will ot make it.")
 }




