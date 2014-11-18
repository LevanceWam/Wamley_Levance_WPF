
 /*
Levance Wamley
Day 7 Zombies
WPF 1411
11-10-2014
 */

 //alert("ello")
 //zombie Attack!!!!
 //we have a zombie at full sail
 // it can bite 4 people a day and turn them into zombie by the next day
 //The CDC has asked how many zombies wll there  be in 8 days

 var numZombies = 1; // how many zombies do we have

 var numBites = 4; // number of bites per zombie per day

 var days = 1; //number of days




 //everyday zombies will bite four people and turn them into zombies
 //loop number of days

 for(var i=1; i<=days; i++){

  //how many new zombies get made and when do they bite people
  var newZombies = numZombies*numBites;

  //the bitten people become zombies


  numZombies = newZombies+numZombies; //numZombies+=newZombies

  console.log("There are now "+numZombies+" zombies on day "+i+"!");
if(numZombies>=1000000){
 break


}

 }





 //how many days will it take us to get to 1 million zombies


 while(numZombies<1000000){

  //how many new zombies get made and when do they bite people
  var newZombies = numZombies*numBites;

  //the bitten people become zombies


  numZombies = newZombies+numZombies; //numZombies+=newZombies

  console.log("There are now "+numZombies+" zombies on day "+days+"!");

  days++;
 }








