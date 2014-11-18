
 /*
Levance Wamley
Title
WPF 1411
11--2014
 */

 //

//figure out how much pizza cost per inch and per slice
 //prompt user for radius of pizza
 //cost of pizza
 //number of slices
console.log("test");
 var pizzaRadius=prompt("What is the radius of your pizza");
 var pizzaCost=prompt("How much does your pizza cost in total");
 var pizzaSlice=prompt("how many slices are in your pizza");

 //function call lordFunction
 var results = lordFunction(pizzaRadius,pizzaCost,pizzaSlice);

 console.log("Your pizza cost $"+results[0]+" per sq in or $"+results[1]+" per slice");

//create a function to start the other functions
 function lordFunction(radius,cost,slices){
  //function call the other 3 function and then return the values
 var area = pizzaArea(radius);

  var areaCost = pizzaSqInCost(area, cost);

 var slicePrice = pricePerSlice(slices,cost);

  return[areaCost,slicePrice];

 }






 //calc the area of pizza
 //calc the price of pizza per sq in
 //calc the price of pizza per slice

 function pizzaArea(r){

  var area = r*r*Math.PI;
  return area;

 }

 function pizzaSqInCost(area,price){

  var costPerIn = price/area;

  //round to 2 decimal
  costPerIn = costPerIn.toFixed(2);
  return costPerIn;

 }

 function pricePerSlice(slices, price){

  var costPerSlice = price/slices;
 costPerSlice = costPerSlice.toFixed(2);
  return costPerSlice;

 }