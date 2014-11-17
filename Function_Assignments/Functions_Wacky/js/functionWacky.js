
 /*
Levance Wamley
Facky Function
WPF 1411
11-14-2014
 */

 //we are going to do a little calculation
 //I  want you to put in a random number and I want to see if the calculator will spit it back out.
 var number=prompt("Please choose a number.");
 while(number==="" || isNaN(number)) {
  number = prompt("Please enter a number only.");
 }


var anonNumber = function(num){
num*=5;
 num*=2;
 num*=10;
 num/=100;

  return num
};
 var returnedAnonNum = anonNumber(number);
 console.log("Your number was "+returnedAnonNum);





