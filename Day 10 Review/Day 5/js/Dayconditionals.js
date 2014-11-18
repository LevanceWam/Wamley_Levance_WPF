
 /*
Levance Wamley
conditionals
1411

 */



// Basic conditional

 //Is the child old enough to ride the ride

 //create a boolean variable

 var oldEnough = false;

 // if the child is old enough he can ride

 //if() condition to test{
 //
 // code if true goes here
 // }



 if(oldEnough){
  //true code goes here
  console.log("you are old enough to ride the ride");

 } else{
  //false code goes here
  console.log("Sorry, you are not old enough");

 }
 console.log("after the if statement. ");


//relation operators
 //compares two values and return a boolean

 //if the kid is over 48" tall he can not ride the ride

 //create a variable to hold the kid height

 var kidHeight = 45;

 //sneaker lift
 var sneakerLift = 2;

//create a variable for kid med heighrt
 var minheight = 48;
 // if your parent goes with you. you can go
 var wParentHeight = 45;


 // if statement
 if(kidHeight > minheight){

  //true code goes
  console.log("Congrats, your tall enough to ride ")

 } else if (kidHeight >= wParentHeight){
  console.log(" you can ride but with your parent")


 } else if (kidHeight + sneakerLift > 48){
  console.log("You can ride the ride, if you wear sneakerlifts");

 } else {
  //false code
  console.log("Sorry kid you're to short. Try growing!")
 }





