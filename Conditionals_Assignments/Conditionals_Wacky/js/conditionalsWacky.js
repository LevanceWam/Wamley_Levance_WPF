
 /*
Levance Wamley
Conditional Wacky
WPF 1411
11--2014
 */


// You are at a local arcade playing on the basketball game
 // you have to reach a certain score to get an awesome prize
 //the highest prize is listed at 1000 points
 //the lowest is 100 points
 //each shot is worth 2 points
 //so you would need to make 500 shots to get the prize
 //you only have 2 hours to get the price
 //The score will stop at 1000 so there is no going over

 var shots =prompt("How many shots did you make");
 console.log(shots*=2);
var hours = 2;
 var total =shots*=Number(hours);

 if (shots==""){
  console.log("Put in a value or leave Basketball is very serious.");
 } else if(shots<=100){
  console.log("Have some M&M");

 } else if(shots<=200){
console.log("Have a Snickers");

 } else if(shots<=300){
  console.log("Have a Almond Joy");

 } else if(shots<=400){
  console.log("Have a Kit-Kat");

 } else if(shots<=500){
  console.log("Have a Crunch bar");

 } else if (shots<=600){
  console.log("Have A Bon Bon");

 } else if (shots<=700){
  console.log("Have a Hersey");

 } else if (shots<= 800){
  console.log("Have a Babe Ruth");

 } else if (shots<=900){
  console.log("Brownie");

 } else if (shots<=1000){
  console.log("You get 30 Reese Cup");

 } else {
  console.log("You get 50 Reese Cup")
 }