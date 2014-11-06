
 /*
Levance Wamley

11-5-14

 */
//alert("hey");

 //ask for steak temp

 /*
  Extra-rare or Blue (bleu)	very red and cold	46–49 °C	115–120 °F
  Rare (saignant)	cold red center; soft	52–55 °C	125–130 °F
  Medium rare (à point)	warm red center; firmer	55–60 °C	130–140 °F
  Medium (demi-anglais)	pink and firm	60–65 °C	140–150 °F	145 °F and rest for at least 3 minutes
  Medium well (cuit)	small amount of pink in the center	65–69 °C	150–155 °F
  Well done (bien cuit)	gray-brown throughout; firm	71 °C+	160 °F+	160 °F for ground beef
  */

 var steaktemp =prompt("What temperature is your steak");

if(steaktemp < 115){

 console.log("uncooked meat -mooo");

} else if(steaktemp <= 120){

console.log("your steak is extra rare");

} else if (steaktemp <= 130){
 console.log("your steak is rare");

} else if (steaktemp < 140){
 console.log("your steak is medium rare");

} else if(steaktemp <= 150){
 console.log("your steak is medium");

} else if (steaktemp <= 155){
 console.log(" steak is meduim well")

} else if (steaktemp <= 160){
 console.log("steak is well done")
} else {
 console.log("you burned your steak")
}






