
 /*
Levance Wamley
Procedures
WPF 1411
11-14-2014
 */

 //alert("ell0");

 //basic function

 function calcArea(width,height){
  var area =width * height;

  return area;

 }










//function call
 var returnedArea= calcArea(6,7);
 console.log(returnedArea);




 //procedure - console.log the perimeter

 function calcPeri(width,height){

  var peri=width*2 + height*2;
  //console.log the per inside of the procedure
  console.log(peri);
  //does NOT return a value
  
 }

 //function call the procedure
 //Do not catch with a variable
 calcPeri(6,7);

