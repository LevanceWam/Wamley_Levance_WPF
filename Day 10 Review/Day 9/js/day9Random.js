
 /*
Levance Wamley
Random Number Function
WPF 1411
11-14-2014
 */

 //alert("hey")

 //create a normal or basic function that will take in
//normal
 //a min and a max number and return a random number between them


 var min=parseInt(prompt("Let's find a random number between 2 values what is the starting number"));

 //validate he user response
 while(min==="" || isNaN(min)){
  //reprompt
  min=prompt("please do not leave blank and only enter in numbers. please enter in a value")

 }

 var max=prompt("what is the higher number");
 while(max==="" || isNaN(max)|| min>=max){
if(max===""){
 //user left blank
 max=prompt("please don't leave blank enter in large value");

} else if(isNaN(max)){
 //user did not type in a number
 max=prompt("please only type in numbers")

} else if (min>=max){

 max=prompt("please type in a number larger than the min value")

}

 }


 //function call
 var returnedNumber= randomizer(min,max);

 console.log("your Random integer between "+min+" and "+max+" is "+returnedNumber);

 //create an array to catch the returned integer
 var numbers=[];

//create a for loop and console.log 15 numbers

 for( i=0; i<15; i++){

  numbers.push(randomizer(min,max));
  console.log(numbers[i]);
  console.log(randomizer(min,max));


 }
console.log(numbers);

 //create a random number generating function

function randomizer(mn,mx){

 //create the variable to hold the random number
 //Math.random()*(max-min)+min
 var randomNumber = Math.round(Math.random()* (mx-mn) + Number(mn));

 //return the number back to the main code
 return randomNumber;

}




