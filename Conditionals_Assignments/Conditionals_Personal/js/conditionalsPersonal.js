
 /*
Levance Wamley
Conditionals Personal
WPF 1411
11-7-2014
 */


 //you have to take your pet to the vet
 // you base your visits to the vet as shown below
 // if you haven't gotten a check up past 8 months
 // or if you recently went in the past 4 months you go for a quick follow up.

 //set a var for the last and next visit

 alert("You are at the local veteran and the doctor asks how many months has it been since your pet has had a check up.\n" +
 "4 months means a quick check up and anything past 8 months is terrible");
 //ternary
 var lastVisit =prompt("When was the last time you took your pet to the veteran.");


 (lastVisit=="") ? console.log("please enter a value"): (lastVisit<=4) ? console.log("Please take your pet to the doctor for a quick follow up") : (lastVisit>=8)? console.log("You need to take your pet to the vet more often") : console.log("Your pet is doing fine! Please continue to bring it to get it checked out");
