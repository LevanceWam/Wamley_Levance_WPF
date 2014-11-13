
 /*
Levance Wamley
Circumference
WPF 1411
11-12-2014
 */
//find the circumference of a circle
 var radius =prompt("What is the Radius:");
 function circumference (radius){


var cirCu = 2*Math.PI*radius;

//console.log("The circumference of the circle is "+cirCu);

  return cirCu;
 }
 radius=validateThis(radius);
var returnedCir =circumference(radius);

console.log("The circumference of the circle is "+returnedCir);

 function validateThis(userPrompt){
  while(userPrompt==="" || isNaN(userPrompt)){
   userPrompt=prompt("Please only Enter a value and do not leave blank");
  }
  return userPrompt;
 }


 var weight=prompt("What is the weight of your animal");
 function stupidAnimal(weight){

var stung = weight * 8.666666667

 }