
 /*
Levance Wamley
Industry Function
WPF 1411
11-14-2014
 */

//We are going to calculate how many days you actually have off a year

 var off =prompt("How many days do you have off in 1 month");
 while(off==="" || isNaN(off)){

  off=prompt("Please only type in values")
 }

function vacation(days){
//so here we are going to find how many days you have off in a year.

 days*=12;

 //Ok now that we have gotten that out of the way. this is where we find out what you actually have
 //So lets say you have a personal project at home and you work on it at home at least twice a month.

 days-=24;

 //your job also calls in because something happened at work and they need you to fill in and this happens at least once a month

days-=12;

 //Your job multiplies the days you have left by 6 and then divide by 2 to give you back those days you worked

days*=6;
 days/=2;

 //finally you subtract 10 days for family and other things that will have you doing stuff on your day off.
 days-=10;

return days;

}
var returnedDays =vacation(off);

console.log("Hey you have "+returnedDays+" days off this year!");