
 /*
Levance Wamley
Circumference
WPF 1411
11-12-2014
 */
//find the circumference of a circle

 function circumference (radius){
var radius =prompt("What is the Radius:");

var cirCu = 2*Math.PI*radius;

console.log("The circumference of the circle is "+cirCu);
validateThis(radius)












 }



 function validateThis(userPrompt){
  while(userPrompt==="" || isNaN(userPrompt)){
   userPrompt=prompt("Please only Enter a value and do not leave blank")
  }
  return userPrompt;
 }