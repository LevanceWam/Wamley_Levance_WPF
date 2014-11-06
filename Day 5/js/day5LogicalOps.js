
 /*
Levance Wamley
 */
//alert("hey")

 //buy an ipad
 //if the price is less than or equal to our budget or paycheck is over 1000
 //then we have ipad

 var budget = 300;
 var iPadPrice = 500;
 var payCheck = 1200;

 //&& and logical operator
 // The ipad must be both of these things

 if (iPadPrice<=budget && payCheck > 1000){
  console.log(" Ipad is within budget, and your check is over a $1000");

 } else {

  console.log("Can't buy the ipad");

 }

 // || or logical operator
 // we can buy if one of the conditions are met

 if (iPadPrice <= budget || payCheck > 100){
  console.log(" you can get it");

 } else {
  console.log("no ipad");
 }



 //&& and logical operator
 // The ipad must be both of these things
 //or i win the lottery
 var wonlottery = true;

 if ((iPadPrice<=budget && payCheck > 1000) || wonlottery===true ){
  console.log(" Ipad is within budget, and your check is over a $1000");

 } else {

  console.log("Can't buy the ipad");

 }



