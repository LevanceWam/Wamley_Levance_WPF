
 /*
Levance Wamley
Title
WPF 1411
11--2014
 */
 //You are trying to help your child learn their multiplication table.
 //the way this is suppose to work is when you type in a number it should output the multiplication table for the number.
 //this table goes up to the selected number version of 56 because we do not want to overload your child
 //for example

 var num=prompt("choose a number you want to see the multiplication table for.");

 for(var i=num ; i<=56; i+=num){
console.log(i)

 }