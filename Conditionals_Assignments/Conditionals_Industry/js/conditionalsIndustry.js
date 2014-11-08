
 /*
Levance Wamley
Title
WPF 1411
11--2014
 */
 alert("You are at the local veteran and the doctor asks how many months has it been since your pet has had a check up.\n" +
 "4 months means a quick check up and anything past 8 months is terrible");

 var lastVisit =prompt("When was the last time you took your pet to the veteran.");
 if (lastVisit<=4){
  console.log("Please take your pet to the doctor for a quick follow up");

 } else if(lastVisit>=8){
  console.log("You need to take your pet to the vet more often");

 } else{
  console.log("Your pet is doing fine! Please continue to bring it to get it checked out");

 }