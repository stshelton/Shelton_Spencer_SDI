/*
Spencer Shelton
3/5/15
section 00
day 2 intro
 */

//alert("Testing to see if connected");

/*
example of a multi-line comment
anything inside of here will not be seen by the computer
 */

//single line comment. ONLY this line will be ignored

/*Alert box - pop up box that will alert the user with information
alert("text that the user will see");
 */

//Console.log - Shows information to the programmer
// Great for checking values and debugging
// Also shows all errors

console.log("This is the console.");

// var = int, char, bool, short and so on

// Declare a variable
// Use the keyword of var
var snes1;

//define the variable
//sets the value of the existing variable
snes1= 42;

//console.log the variable
console.log("the variable snes1 is ");
console.log(snes1);

//declare and define a variable at the same time
var a = 2;

console.log(a);

// a= a+3
a+=3;
console.log(a);

//declare new variable
var b;

//define this variable using an existing variable
b=a+3;
console.log(a);
console.log(b);

// simple math
// find our ages

//declare and define the year we were born

var yearBorn = 1993;
var currentYear = 2015;


var age= currentYear - yearBorn -1;
console.log(age);

//talk about math
// +,-, *, /

//find the area of a triangle
// base * height divided by 2

var base = 4;
var height = 5;

var areaT = base*height/2;
console.log(areaT);

// module %
// the remainder

var decimal = 32/10;
console.log(decimal)

var remainder = 32%10;
console.log(remainder)

//find out if even or odd
// %2 1= odd 0= even

var evenOrOdd= 67%2;

console.log(evenOrOdd);

//assignment operators

/*
= assigns the value to the variable
++ adds one to the current value of the variable
-- subtracts one from the current value of the variable
+= # adds the number to the current value of the variable
-= # subtracts the number to the current value of the variable
/= # divide the current value by the number
*= # multiply the current value by the number


 */

var assign = 0;

// ++ is the same as the assign = assign + 1;
assign++
console.log(assign);

//strings -- any text that we use
// quotes are needed to distinguish between variables and plain text.

var kermit = "light green ";
var frogName = "kermit";
console.log(frogName);

// to double quote or to not double quote
//var phrase = 'i don\'t know';
var phrase = "i don't know";
console.log(phrase);

//escape character can also do multiple lines \n = new line
var phrase2 = "i don't know. \n you never do!";
console.log(phrase2);

//boolean - kind of like a light switch
// either true or false
// not a text string!! and must be lowercase!!
var yes = true;

var nope = false;

//order of operations
// PEMDAS - please excuse my dear aunt sally
// parenthesis, exponents, multiplication, division, addition, subtraction

// find the average quiz grade
var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 90;

//average -add them up and divide by the number of quizes
var average = (quiz1 + quiz2 + quiz3)/3
console.log(average);

//concatenation - combining text strings
// use the + plus sign - add and concatenation

var firstName= "kermit";
var lastName ="The Frog";


var fullname = firstName+" " + lastName;
console.log(fullname);

var d = "6";
var e = "7";
var combined = d+e;

console.log(combined);


var pi= 3.14;

//to round a number we use .toFixed(#)
var num = 5.5678912345

//round to 2 decimal places
var n = num.toFixed(2);
console.log(n);



