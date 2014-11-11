
 /*
Levance Wamley
Validating Prompts
WPF 1411
11--2014
 */

 //alert("ello")


 // min max number - find a random between
 //Math.round(math.random()+(max-min)*min

 //ask the user for a minmas variable
 var min =prompt("Let's find a random number, whats the mini");

 //test if the user just pressed enter

 /*
 if(min===""){
  min =prompt("What's the minimum number, please enter a value,please do not leave blank ");


 }

*/

 //validing uses while loops
 //because we dont know what the user will do
/*
 while(min===""){
  //as long as the user skips it reprompt
  min =prompt("What's the minimum number, please enter a value,please do not leave blank ");


 }

 //valid the user info

 //function that checks the type of variable
 //isNaN(variable to check)

console.log(isNaN(7)); //returns false
 console.log(isNaN("Cat")); //returns True


 while(isNaN(min)){
  //loops as long as its not a number
  //reprompts the value
  min=prompt("please type in only numbers\nwhat is the minimum number");


 }
*/
//combine both test together

 while(min===""|| isNaN(min)){
  //reprompt the user

  if(min===""){
   min=prompt("Please dont leave this blank");

  } else{

   min=prompt("Only type in numbers")


  }
 }


 //prompt ad validate at the same time

 do{
  var max =prompt("Please only type in numbers and dont leave blank\nWhat is the max value")

 }while(max==="" || isNaN(max));

 //valiidate if the user types in exactly what we want

 var question = prompt("Please type in yes or no");

 while(question!="Yes" && question!="yes" && question!="no" && question!="No"){

  //reprompt the user
  question=prompt("Please type in ONLY yes or No");


 }

