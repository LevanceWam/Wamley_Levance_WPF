
 /*
Levance Wamley
 */
//alert("hey");

 //if your gpa is greater than 2.0 then you graduate


 var gpa = 3.5;

 if(gpa > 2.0){
  console.log("Congrats you graduate");
 } else {
  console.log("Sorry, study more");

 }

 //convert to a termary
 //(condition to test)? true code : esle code

 (gpa>2.0) ? console.log("Congrats you graduate") : console.log("Sorry, study more");


 // we can set a variable to the outcome
 // based on a kids age they will read one or two books
 // kids under 10 will read dr suess
 // kids over will read time machine

 var age = 25;
 var book;



 // kids 14 and up read twilight
 book = (age<10) ? "Dr. Suess" : (age<14)? "The time machine" : "Twilight";



 //book = (age >= 10) ? "The Time Machine" : "Dr. Suess";

 console.log(book);









 //