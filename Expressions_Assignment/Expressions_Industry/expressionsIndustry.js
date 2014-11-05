/*
 Levance Wamley
 Expression Industry Problem
 WPF 1411
 11-3-14
 */

alert("Its the end of the month and you plan to make a list of the all the sites you have and find the mean, " +
"for the amount of people that visit your sites.");
//You go through your sites and find that you have 6 of them


var numSites = 6;
alert("After going through your sites you have "+numSites)+" sites up and running.";
console.log("After going through your sites you have "+numSites)+" sites up and running.";
//Now  list the sites
var sites = ["Site 1", "Site 2", "Site 3", "Site 4", "Site 5", "Site 6"];
console.log(sites);

//Now we need to determine how many people each site has gotten.

var site1 =prompt("After checking Site 1 how many people visited site one");
console.log(site1);
var site2 =prompt("After checking Site 2 how many people visited site one");
console.log(site2);
var site3 =prompt("After checking Site 3 how many people visited site one");
console.log(site3);
var site4 =prompt("After checking Site 4 how many people visited site one");
console.log(site4);
var site5 =prompt("After checking Site 5 how many people visited site one");
console.log(site5);
var site6 =prompt("After checking Site 6 how many people visited site one");
console.log(site6);

//Now we want to find the mean of the sites
// Gather up all of the sites and put them in a table

var mean = [site1, site2, site3, site4, site5 , site6];
//now find out the mean total by adding them all together

var meanTotal = Number(mean[0]) + Number(mean[1]) + Number(mean[2]) + Number(mean[3]) + Number(mean[4]) + Number(mean[5]);
alert("After adding all of the sites together your added total is "+ meanTotal);
console.log("After adding all of the sites together your added total is "+ meanTotal);

// divide by total number of sites
alert("Now we have to divide the total by the number of sites");
var finalMean = meanTotal/mean.length;
alert("After dividing your added total by 6 we now have the mean of all of your sites and that is  "+finalMean);
console.log(finalMean)