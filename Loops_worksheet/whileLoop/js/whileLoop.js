
 /*
Levance Wamley
While loops
WPF 1411
11-10-2014
 */

alert("Hey sleepy head we know that you are tired so we decide to count sheep to help you sleep");
 //we are going to count sheep until you fall asleep!
  var counter = 0;
 var sheep =prompt("How many sheep do you want to count to?");

 while (counter<=sheep){

  while(sheep==="" || isNaN(sheep)){
   sheep=prompt("Please try again and make sure that your number is greater than 0 and there is a value.");

  }if(sheep===0){
   sheep=prompt("Please try again and make sure that your number is greater than 0 and there is a value.");

  }else if(counter===0) {
   console.log(counter + " sheep");


  }else if(counter===1){
   console.log(counter+" sheep")
  } else{
   console.log(counter+" sheeps");


  }counter++;
  }