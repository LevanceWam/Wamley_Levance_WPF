
 /*
Levance Wamley
Day 4 Casting
WPF 1411 11-3-14
 */


 //alert("testing 1,2,3,");

// Casting variables - treat one variable type as another

 var stringVar = "6";
 var results = 7 + stringVar;

 console.log(results);

 // to cast a variable as a number
 // Number() - anything inside of the parthesses is treated as a number

 var castingResults = 7 + Number(stringVar);
 console.log(castingResults);


 //casting numbers as a string
 //String() - treats anything inside as a text string

 // phone number
 var areaCode = 407;
 var firstPart = 979;
 var secondPart = 6542;

 //conatanate the phone number to one variable

 var phoneNumber = String(areaCode)+String(firstPart)+String(secondPart);
 console.log(phoneNumber);

 var phoneNumber2 = "("+areaCode+")"+firstPart+"-"+secondPart;
 console.log(phoneNumber2);

 // 7 cats
 //Parsing Integers
 //parseInt() tracks through the text string and returns

 //only the first number is returned
 //the number has to be first
 // if parseint cant find it returns NaN
 //NaN - Not A Number

 var a = parseInt("40 years 7 years ago");
 console.log(a);

var b = parseInt("I am 40 years old");
 console.log(b);

//prompts() - only returns text string

 var cupsHad = prompt("How many cups do you have");
 var cupsbrought = prompt (" how many cups are you going to get");

//add the number of cups i had plus that i am buying.
 var cupTotal = Number(cupsbrought) + parseInt(cupsHad);

 console.log(cupTotal);

