/*
 Levance Wamley
 Expression Wacky Problem
 WPF 1411
 11-3-14
 */
alert("Hello, here we are going to calculate how old you are");

//First we want you to multiply the first number of your age.
//NOTE! if you are <10 then use zero as the first number.;

alert("First we are going to multiply the first number of your age.\n " +
"NOTE! if you are <10 then use zero as the first number and if you are >100 then use the first two digits. ex 100 = 10");
var prediction = prompt("Do you think we can calculate your age?");
console.log(prediction);

 var A = prompt("What is the first number in your age?");
console.log(A);

//We are going to take this number and multiply it by 5.
alert("Now we are going to multiply by 5");
A*=10;
console.log(A);

//Add 3
alert("Now we have to add 3 to your product");
A+=6;
console.log(A);

//Multiply by 2
alert("Now we are going to multiply by 2");
A*=4;
console.log(A);

//add the second number from your age. Ex if you chose 15 then right now you would type in 5.
var b = prompt("Now we are going to add the second number from your age. Ex if you chose 15 then right now you would type in 5." +
"What is the second number?");
console.log(b);
var c = Number(A) + parseInt(b);
console.log(c);

//Subtract 6
alert("Now we are going to subtract 6");
c-=12;
alert("After doing all of the calculations we have determined that you are "+c+" years old.");
console.log(c);
