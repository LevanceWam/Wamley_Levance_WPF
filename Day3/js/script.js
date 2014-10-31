/**
 * Created by vancewamley on 10/31/14.
 */

// single line comment

/*
Multi lined comment
you can make it as large as you want

 */

alert("Hello World!");

// Console Log
// Programmers to show variables and code
console.log("this is the console log can you see me")


// Declare a variable
// use the keyword of var
var whatEver1; //Declaration


// Set the value of the variable
whatEver1 = 42 ; // Definition

// Storage container = value

// Setup a var and define it in the same line
var a = 2 ; //Declare and Define
console.log(a);

a+3;
console.log(a);

a= a+3;
console.log(a);

//Declare a variable b
var b;

//Define the value of b
b= a+3;
console.log(a);
console.log(b);

//simple math
//how old we are
//2014-year born

var yearBorn = 1995;

//Calculate your age
var myAge = 2014 - yearBorn;

console.log(myAge);

//Talk about Math!!!!

//+,-,*,/

//Find area of a triangle
//Base * height/2

var base = 20;
var height = 15;

var areaTriangle = base * height /2;

console.log(areaTriangle);

//Module - %
//Gives reminder left over
var remainder = 32%10

console.log (remainder);

//Find out if its a odd or even number
//%2 -  modulo by 2
//1- odd
//o- even
var evenOrOdd = 67%2

console.log(evenOrOdd);

//Assignment operator

/*
= Assigns the value to the var
++ adds 1
-- subs 1
/ divides var
* multiply the value of the number
*/




var x= 1;
x++;
x--;
x+=2; // x = x+2
x-=1;
x/=2;
x*= 8;
console.log(x);



//strings
//these are the text fields of coding
//MUST start and end in the matching quotes
//either ' or "


//Declare
var kermit = "light green"
var frogName = kermit

console.log(frogName);

// why should I bother with single or double quote
// Escape character we put a backlash in front of the character
//Multi line break \n new Line character

var phrase = 'I don\'t Know \n you never know';
console.log(phrase);

//Boolean
// light switches of the programming word
// Either contains true or false

var yes = true;

var nope = "True"; // NOT A BOOLEAN

var lightSwitch = false;



//Order of Operation
//PEMDAS: Please excuse my dear aunt sally
//(), exponent, *, /, +, -
// find quiz averages
var quiz1 = 87;
var quiz2 = 100
var quiz3 = 70

// average
var averageQuiz = (quiz1 + quiz2 + quiz3)/3;
// rookie mistake is using to many parenthesses

console.log(averageQuiz);




// Calculate the perimeter of a rectangle
//width+2xlength

var width = 6;

var length =7;

var perimeterRect = 2*width + 2*length;

console.log(perimeterRect)


//catataneation combine strings

var firstName = "Kermit";

var lastName = "The Frog";

// we got to catetnation them to one variable

var fullName = firstName+" "+lastName;
console.log(fullName);

var d = "6";
var e = "7";

var combine = d+e;

console.log(combine);

//IS "6" the same as 6 ??

var f = 8;

var g = "4";
var h = 4;

var combine2 = f+g+h;
console.log(combine2);


//concatenate variables
//strings as well

var together = ("the results of adding number is"+combine)
console.log(together);








