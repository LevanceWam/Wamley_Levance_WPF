
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
 // if you have at least 4 or 6 sites done within 6 - 9 days you can have some days off

 var days=prompt("How many days did it take you to finish these sites?");
 var sites=prompt("How many sites did you make?");

 console.log(days);
 console.log(sites);

 if ((days<=6 && days==9 ) && (sites==4 || sites>=6 ) );{
  console.log("You can have a couple of days off your ahead of schedule");

 } else if  ((days=="") || (sites=="")){
  console.log("You get nothing go back to work!")

 } else {

 }
