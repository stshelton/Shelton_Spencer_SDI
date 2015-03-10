/*
 Spencer Shelton
 3/10/15
 section 00
 ternary
 */

// if your gpa is over 2.0 then you can graduate

// creat a variable for your gpa
var gpa = 3.5;

//basic conditional
if(gpa > 2.0){
    console.log("you can graduate ");
}
else
{
    console.log("mcdonalds is hiring ");
}

//(condition to test ? code to run if true : code to run if false)

//Create a basic ternary function for your gpa
(gpa > 2.0) ? console.log("you can graduate") : console.log("you cant graduate");

// if a child is under 10 then they must read green eggs & ham, otherwise they can read the time machine

// create a variable for child age and for the book

var age= 6;
var book;

//use a ternary to define the book

book = (age >= 10) ? console.log("you must reed green eggs and ham "): console.log("you must read the time machine");

console.log(book);

//value of book if basic conditional

var bookBasic;

if(age>10){
    bookBasic="you must read green eggs and ham";

}
else{
    bookBasic="you must read the time manchine";
}

console.log(bookBasic);