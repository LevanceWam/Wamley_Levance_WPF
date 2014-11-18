
 /*
Levance Wamley
Day 7 beer
WPF 1411
11-10-2014
 */
//alert (hey)

 //console.log the whole song of 99 bottles of beer on the wall/

 //Setup Loop
 //for (inlitiation variable : condition : increment of changes.

 for(var i=99; i>0;i--) {
  //console.log



  //add an if statement testing for last case
  if(i===1) {
   console.log(i + " bottle of beer on the wall. " + i + " bottle of beer.");
   console.log("You take one down. You pass it around. No more bottles of beer.");
   break;

  }else if(i===2){
   console.log(i+" bottles of beer on the wall. "+i+" bottles of beer.");
   console.log("You take one down. You pass it around. "+(i-1)+" bottle of beer on the wall.");

  } else{

   console.log(i+" bottles of beer on the wall. "+i+" bottles of beer.");
   console.log("You take one down. You pass it around. "+(i-1)+" bottles of beer on the wall.");
  }


 }
