/*
Levance Wamley
Day 4 Prompts
WPF 1411
11-3-14
 */
//alert ("Testing 1,2,3")


//ask user for output

//prompt() asks the user to type something in
var yearBorn = prompt("Enter your Year of birth here");
console.log(yearBorn);
while(yearBorn==="" || isNaN(yearBorn)){
    console.log("Please enter in a value.")
}

//Figure out how old we are
function yourAge(yearBorn){
var age = 2014 - yearBorn;
return age;
}
var returnedAge = yourAge(yearBorn);
console.log("You are "+returnedAge+" years old.");


//Calculate the area of a rectangle.
// area = length * width

var length = prompt("We are going to calculate the area of a rectangle.|n Please enter the length of your rectangle");
while (length==="" || isNaN(length)){
    length=prompt("Please enter in the correct value");
}

var width = prompt("Please enter the width of your Rectangle.");
    while(width==="" || isNaN(width)){
        width=prompt("Please enter in a correct value")
    }

//calculate the area


var areaTri=function(length,width){
var area = length * width;
return area;
};
var returnedArea  = areaTri(length,width);
console.log("The area of your triangle is "+returnedArea);

// create a result variable and then console log that
//var results = ("The area of your rectangle with a width of "+ width +" and a length of "+ length +" is "+ area);
//console.log(results);
//alert(results);

//console.log the area
//console.log("The area of your rectangle is "+ area+".");
//console.log("The area of your rectangle with a width of "+ width +" and a length of "+ length +" is "+ area);


//alert the user the same info
//alert("The area of your rectangle with a width of "+ width +" and a length of "+ length +" is "+ area);





















