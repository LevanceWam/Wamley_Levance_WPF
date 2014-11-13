
 /*
Levance Wamley
Returns
WPF 1411
11-12-2014
 */

 //alert

 //returning values from a function
 // how do we get stuff out of vegas


 //area of a rectangle

 function calcArea(wid,len){

  var area = wid*len;
  console.log("the area inside of the function is "+area);

  //return the area variable to the main code
  return area;

 }

 //function call
 //catch the return value with variable

 var returnedArea =calcArea(30,20);

 console.log(returnedArea);

 //prompt the user
 var widtth =prompt("enter width");
 var length =prompt("enter length");
 length=validate(length);
 var userRectArea =calcArea(widtth,length);
while(widtth==="" || isNaN(widtth)){





}

 //var useRectPeri=periRect(widd,len);
 //console.log("width: "+widtth+" length: "+length+" perimeter: "+useRectPeri);

 console.log("the width of the rec "+widd+" the length is "+len+" the area "+userRectArea);{


 //create a function to find perimeter of a rectangle
 //function periRect(widd,len){
//var widd=6;
  //var len=4;
 // var perimeter = widd*2 + len*2
  //return the perimeter
  //return perimeter;

 }





 //creating a validation function


 function validate(userPrompt){
  while(userPrompt==="" || isNaN(userPrompt)){

   //reprompt the user
   userPrompt=prompt("please type in only numbers and dont leave blank");
  }

  return userPrompt;


 }

