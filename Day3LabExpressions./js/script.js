/*
 Spencer Shelton
 3/5/15
 section 00
 day 2 intro
 */

// slices of pie part 1

var SlicesPerPizza = 10;
var PartyPeople = 10;
var PizzasOrdered= 10;

var slicesPerPerson = SlicesPerPizza/PartyPeople;

//phrases
var phrase1 ="Each person ate ";
var phrase2 =" slices of pizza at the party";
//cout <<
console.log(phrase1,slicesPerPerson,phrase2);

//slices of pie part 2

var slicesSparky = slicesPerPerson % 1;

var phrase3 = "Sparky got ";
var phrase4 = " slices of pizza.";

console.log(phrase3,slicesSparky,phrase4);



// shopping bill part 1 

var week1 = 200;
var week2= 200;
var week3= 250;
var week4= 150;
var week5= 200;

var totalShoppingBill = week1+week2+week3+week4+week5;
var averageSpending = (week1+week2+week3+week4+week5)/5;


// print out onto screen
console.log("you have spent a total of $ ", totalShoppingBill, " on groceries over 5 weeks. That is an average of $ ", averageSpending," per week ");











