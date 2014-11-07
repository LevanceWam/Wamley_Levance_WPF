
 /*
Levance Wamley
Nesting If Statements
WPF 1411
11--2014
 */

 //alert("ello gov");


 //Some decisions depend on other decisions

 // if it is warm lets go to the beach if not lets go to the movies
 // if the water is warm enough lets go swimming if not tan


 //Get temp
 var temp =prompt("what is the temperature out side");

 //get water temp

 var waterTemp = 60;



 //are you taking a kid
 var child = true;

 //if else statement

 if(temp>70){
  console.log("lets go to the beach");
//test water temp
  waterTemp =prompt("what is the water temp");

  if(waterTemp>75){
   console.log("lets go swimming in the water");

  } else {
   console.log("lets lay out and get a tan");

  }
 } else {
  console.log("lets go to the movies.");


  if(child){
   var childAge = prompt("how old is the child");
   if (childAge<=6){

    console.log("watch the smurf movies");
   } else{
   console.log("go watch evil within");
  }


 }



 // using && and ||

 if(temp>70 && waterTemp>75){
  console.log("lets go to the beach\n lets go swimming");

 } else if(temp>70 && waterTemp<=75){
  console.log("lets go to the beach\n and lets get a tan");

 } else if(temp<=75 && child<=6){
  console.log("go to movie with kid");
 } else if(temp<=70 && !child<=6){
  console.log("bring the blood");

 }}




