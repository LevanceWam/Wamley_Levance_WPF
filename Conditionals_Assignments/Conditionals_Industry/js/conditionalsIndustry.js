
 /*
Levance Wamley
Conditional Industry
WPF 1411
11-7-2014
 */

 //You have a ton of websites you need to have done.
 //if you have a certain amount done you can have a couple of days off before the due date because your a couple days ahead of schedule.
 // you have 50 sites
 // you have 12 days to get the job done
 // if you do 4 or 6 sites a day over 6 days you can have some days off

 alert("You have 50 sites that need to be done in 12 days.\n if you get 4 to 6 sites done a day in 6 to 9 days and 9." +
 " 9 being the cut off day you can have the couple of days off");

 var days=prompt("How many days did it take you to finish these sites?");
 var sites=prompt("How many sites did you make a day?");

 console.log(days);
 console.log(sites);

  if ((days<6) && (sites==5 || sites>=8 )){
  console.log("You can have a couple of days off your ahead of schedule");

 } else if  ((days=="") || (sites=="")){
  console.log("You get nothing go back to work!")

 } else {
console.log("We're sorry you can't have any days off please try harder next time")
 }
