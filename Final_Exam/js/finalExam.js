
 /*
Levance Wamley
Final Exam
WPF 1411
11-19-2014
 */

 //alert("Testing 1,2,3");

 var item=prompt("How much does your item cost");

 while (item==="" || isNaN(item)){
  item=prompt("Please enter in a number only please");
 }
 //console.log(item); test to see if the validation worked if so proceed

 var discount=prompt("What is the Discount");

 while (discount==="" || isNaN(discount)){
  discount=prompt("Please enter in a number only Please");
  while (discount<0 || discount>100){
   discount=prompt("Please enter in a number higher than 0 and lower than 100.");
  }
 }
//console.log(discount); test to see if the validation was correct if so proceed

 function disTotal(cost,discount){

  var discountPrice=(100-discount);
  discountPrice/=100;
  discountPrice*=cost;
   return discountPrice;
 }

 var returnedPrice=disTotal(item,discount);
 console.log("Your item comes out to $"+returnedPrice+" with the original price of $"+item+" and a discount of "+discount+"% off!");