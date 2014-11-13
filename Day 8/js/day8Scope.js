
 /*
Levance Wamley
Scope
WPF 1411
11-12-2014
 */

 //alert

 //variable scope
 //variables inside and outside the of an functions


 //we try not use the same name for variable....but..
 //in large files this is going to be impossible

 //when you create  a variable inside of a function it only exist
 //inside of that one function



 //create a variable for width (main code)
 var width=5; //scope outside of the function or scoped to main code
 console.log("starting width in main code is "+width);

 //create a function that calculates the perimeter of a rectangle

 function calcPeri(){


  var width = 10 //scoped to the function calcPeri
  console.log("inside of the function, your width is "+width);
  var height = 20;
  var perimeter = width*2+height*2;

  console.log("Inside of the Function, the perimeter is "+perimeter)

 }



 console.log("before function call "+width);
 calcPeri();
 console.log("after the function call "+width);

