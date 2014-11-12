
 /*
Levance Wamley
Looping Arrays
WPF 1411
11-12-2014
 */


 //Looping over arrays
 //for(var i = 0;i<array.length;i++;)


 //create a array
 var names = ["Scooby","Shaggy","Fred","Velma","Daphne","Scrappy"];

 //tell each of the members that they solved the case

 for(var i=0; i<names.length;i++){
  console.log("you solved the case "+names[i]+"!");
 }


 //create a array of bills to pay

 var bills = [50,10,5,20,10];

 //lets add the bills

 //create a total bills variable outside and above our loop
 var totalBills=0;
 for(var j=0;j<bills.length;j++){
  //add each individual bill to the total bill
  //totalBills +=bills[j]; // = totalBills+bills[j]
// ONLY CARE ABOUT BILLS THAT ARE 20 AND HIGHER


  if(bills[j]>=20){
   //if this is true then we add that bill to the total
   totalBills +=bills[j];

  }

 }
 console.log("Your total bills are "+totalBills);