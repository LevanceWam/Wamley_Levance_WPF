
 /*
Levance Wamley
Title
WPF 1411
11--2014
 */

//alert("ell")

 //Normal rounding
 //.5+ goes up the rest goes down

 var num1=9.544;

 console.log(num1);
 console.log(Math.round(num1));

 //floor round
 //always round down
 //you need a lot of nines to make it go up
 var num2 = 6.999;
 console.log(num2);
 console.log(Math.floor(num2));


//ceil round
 //always round up
 var num3 = 4.1;
 console.log(num3);
 console.log(Math.ceil(num3));


 //how do we get specific number of decimal
 //toFixed - not a part of math

 var num4= 6.7893;

 console.log(num4);
 console.log(num4.toFixed(2));
//putting in 0 will just round the number up to 7



 //random numbers
 //Math.random() -  gives values o and almost 1
 //nothing goes inside of the ()

 var num5 = Math.random();


console.log(num5);

 //number 0 - 10
 var num6 = Math.random() * 10;
 console.log(num6);



//integers 1-10
 var num7 = Math.round( Math.random() * 10);
 console.log(num7);

 //integers between 0-100
 var num8 =Math.round(Math.random()*100);
 console.log(num8);


 //get a random integer between any 2 values
 // math.random()*(max-min) + min

 //random between 50-80

 var num9 = Math.round(Math.random()*(80 - 50) + 50);
 console.log(num9);

 //Not sure if I had to type this but i did it any =way
num9 = num9.toFixed(2);
 console.log(num9);


 //prompt the user for a max and min value
 // then find the number between them

 var max =prompt("Let's find a random number whats the max value");
 var min =prompt("please type in a min value");

 //lets find the random integer

 var randInt =Math.random() * (max-min) + Number(min);
 console.log(randInt);
 console.log("your number is "+randInt);


 //Math class constant
 //Number that never changes
 //always uppercase
 //Math.PI - 3.14...........
 //2 * pi= r

 var radius = 7;

 var circleArea = 2*Math.PI*radius;
 console.log(circleArea);


