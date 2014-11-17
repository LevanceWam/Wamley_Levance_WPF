
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
 longhorn=validateMe(longhorn);
 var redLobster=prompt("How many people voted for Red Lobster?");
 redLobster=validateMe(redLobster);
 var buffaloWildWings=prompt("How many people voted for Buffalo Wild Wings?");
buffaloWildWings=validateMe(buffaloWildWings);
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
place(longhorn,redLobster,buffaloWildWings);



 function validateMe (userPrompt){
  while(userPrompt==="" || isNaN(userPrompt)){
   userPrompt=prompt("Please enter a value and make sure its a number");
  }if(userPrompt>= 10){
   userPrompt=prompt("please enter a value lower than 10")
  }

 }


 function total (long,red,buff) {
  if ((Number(long) + Number(red) + Number(buff)) > 10) {
   console.log("We stay home until someone learns how to count the right way");

  }

 }
