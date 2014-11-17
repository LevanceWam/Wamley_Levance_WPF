
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
 while(longhorn==="" || isNaN(longhorn || longhorn>10)){
  longhorn=prompt("Please enter a value and make sure its a number lower than 10");
 }
 var redLobster=prompt("How many people voted for Red Lobster?");
 if(redLobster==="" || isNaN(redLobster) || redLobster> 10){
  redLobster=prompt("please enter a value and make sure that its lower than 10");
 }
 var buffaloWildWings=prompt("How many people voted for Buffalo Wild Wings?");
 if(buffaloWildWings==="" || isNaN(buffaloWildWings) || buffaloWildWings>10){
  buffaloWildWings=prompt("Please enter a value and make sure that its lower than 10")
 }
 (longhorn===redLobster) ? console.log("We go to Buffalo Wild Wings because of the tie"):(longhorn===buffaloWildWings) ? console.log("We go to Red Lobster because of the tie") :(redLobster===longhorn) ? console.log("We go to Buffalo Wild Wings because of the tie") :
     (redLobster===buffaloWildWings) ? console.log("We go to Longhorn because of the tie") :



 total(longhorn,redLobster,buffaloWildWings);
 place(longhorn,redLobster,buffaloWildWings);


 function total (long,red,buff) {
  if ((Number(long) + Number(red) + Number(buff)) > 10) {
   console.log("We stay home until someone learns how to count the right way");

  }if ((Number(long) + Number(red) + Number(buff)) < 10) {
   console.log("We don't eat because some people didn't vote");

 }



 function place(lh,rl,bww){

  if(lh>rl && lh>bww){
   console.log("Let's go to Longhorn everyone");
  } else if(rl>lh && rl>bww){
   console.log("Let's go to Red Lobster everyone");
  } else if(bww>lh && bww>rl){
   console.log("Lets go to Buffalo Wild Wings");
  }

 }
 }
