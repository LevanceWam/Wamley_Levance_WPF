
 /*
Levance Wamley
Argument
WPF 1411
11-12-2014
 */

 //alert

 //argument goes into the function - part of the function call
 // a parameter catches the argument and is used inside of the function

 //create function that calculates the area of a rectangle

 function calcArea (w,h){//parameters go here
//hard coded values for width and height - not good

  //var width = 10;
  //var height = 20;
  //var area= width*height;

  var area = w*h;

  console.log("the area of your rectangle is "+area)
 }

 //function call
 calcArea(4,5); //arguments go here

 calcArea(2,3);


var wid =prompt("width: ");
 var hei =prompt("height: ");
 calcArea(wid,hei);


//calculate dog years


 //dog years = human years * 7

 function dogYears(humanAge){

  var dogAge= humanAge * 7;
  console.log("You are "+dogAge+" years old in dog years");

 }

 dogYears(19);
 var yourAge =prompt("please type in your age");
 dogYears(yourAge);

 var friendsAge =prompt("how old is youyr friend fred");
 dogYears(friendsAge);
