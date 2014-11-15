
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
 var buffaloWildWings=prompt("How many people voted for Buffalo Wild Wings?");

 longhorn=validateMe(longhorn);
 redLobster=validateMe(redLobster);
buffaloWildWings=validateMe(buffaloWildWings);

 var place =function(lh,rl,bww){

  if(lh>rl && lh>bww){
   console.log("Let's go to Longhorn everyone");
  } else if(rl>lh && rl>bww){
   console.log("Let's go to Red Lobster everyone");
  } else if(bww>lh && bww>rh){
   console.log("Lets go to Buffalo Wild Wings");
  } else if(Number(lh)+Number(rl)+Number(bww)){
   console.log("We stay home until someone learns how to count the right way")

  }

 };
place(longhorn,redLobster,buffaloWildWings);



 function validateMe (userPrompt){
  while(userPrompt==="" || isNaN(userPrompt)){
   userPrompt=prompt("Please enter a value and make sure its a number");
  }if(userPrompt>= 10){
   userPrompt=prompt("please enter a value lower than 10")
  }

 }