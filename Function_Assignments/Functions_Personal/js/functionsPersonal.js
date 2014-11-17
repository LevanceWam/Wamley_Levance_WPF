
 /*
Levance Wamley
Title
WPF 1411
11-14-2014
 */

 //Its party night. You and a couple of friends can't decide on whether to go to
 // Longhorn, Red Lobster, or Buffalo Wild Wings
 //So out of 10 people you guys take a vote.

 var longhorn=prompt("How many people voted for Longhorn?");
 var redLobster=prompt("How many people voted for Red Lobster?");
 //redLobster=validateMe(redLobster);
 var buffaloWildWings=prompt("How many people voted for Buffalo Wild Wings?");
//buffaloWildWings=validateMe(buffaloWildWings);
 place(longhorn,redLobster,buffaloWildWings);



  while(longhorn==="" || isNaN(longhorn || longhorn>10)){
   longhorn=prompt("Please enter a value and make sure its a number lower than 10");
  }if(redLobster==="" || isNaN(redLobster) || redLobster> 10){
   redLobstert=prompt("please enter a value and make sure that its lower than 10");
  }else if(buffaloWildWings==="" || isNaN(buffaloWildWings) || buffaloWildWings>10)




 function total (long,red,buff) {
  if ((Number(long) + Number(red) + Number(buff)) > 10) {
   console.log("We stay home until someone learns how to count the right way");

  }

 }
 total(longhorn,redLobster,buffaloWildWings);


 function place(lh,rl,bww){

  if(lh>rl && lh>bww){
   console.log("Let's go to Longhorn everyone");
  } else if(rl>lh && rl>bww){
   console.log("Let's go to Red Lobster everyone");
  } else if(bww>lh && bww>rh){
   console.log("Lets go to Buffalo Wild Wings");
  }

 }
