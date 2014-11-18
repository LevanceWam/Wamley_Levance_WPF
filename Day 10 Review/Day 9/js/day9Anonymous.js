
 /*
Levance Wamley
Anonymous
WPF 1411
11-14-2014
 */

 //alert("hello")

 /*
 basic functions
 function functionName(){

  //code goes here





 }

  Anon function
  var functionName= function(){
  //code goes here


  };
  */


 // a normal function to find the area of a triangle
 function triangleArea(base,height){

  var area = .5 * base * height;
  return area;

 }

 //function call - for normal function
 var returnArea = triangleArea(4,5);
 console.log("Returned area for the normal function is "+returnArea);




 //anonymous function that calculate the area of triangle

 var anonTriArea = function(base,height){
   var area = .5*base*height;
   return area;
 };

 //function call for anon function
 var returnedAnonArea = anonTriArea(2,3);

 console.log("The return area for the anon function is "+returnedAnonArea);




