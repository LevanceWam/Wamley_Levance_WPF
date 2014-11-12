
 /*
Levance Wamley
Title
WPF 1411
11--2014
 */
//You are playing a game on your phone for every time you log on for as long as  you get 4 coins
 //you start with 20

var days = prompt("How many days do you plan on playing this game in a row");
 var coins = 20;
 var nextLogin = 4;

 for(var i=1; i<=days;i++){
var newCoins = (coins)+(nextLogin);
 } if(days===0) {
  console.log("stop playing the game then.")
 }
 else if(days==="" || isNaN(days)) {
days=prompt("enter a value only")
  }
 }