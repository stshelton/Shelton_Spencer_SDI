/*
 Spencer Shelton
 3/5/15
 section 00
 day 2 intro
 */

// slices of pie part 1

var slicesPerPizza = 10;
var partyPeople = 8;
var pizzasOrdered= 10;

var totalSlices = slicesPerPizza * pizzasOrdered;

var slicesPerPerson = totalSlices/partyPeople;

//phrases
var phrase1 ="Each person ate ";
var phrase2 =" slices of pizza at the party";
//cout <<
console.log(phrase1,slicesPerPerson,phrase2);

//slices of pie part 2

var slicesSparky = totalSlices%partyPeople;

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
var averageSpending = totalShoppingBill/5;


// print out onto screen
console.log("you have spent a total of $", totalShoppingBill, "on groceries over 5 weeks. That is an average of $ ", averageSpending," per week ");


// discount item

var originalPrice = 100;
var discountPercentage = 20;
var discountDecimal = discountPercentage/100;
var item = "cold air intake";
var tax = 6;
var taxDecimal = tax/100;

//tax
var withTax = originalPrice * tax;

// original price;
var withoutTax = originalPrice;
//discount
var withDiscount = originalPrice * discountDecimal;
//price with discount
var discountPrice = originalPrice-withDiscount;
//price with tax
var bleh = discountPrice * taxDecimal;

var taxPrice = discountPrice+bleh;
console.log("your", item, "was originally $", withoutTax,"but after a",discountPercentage," discount, it is now",discountPrice, "without tax and $", taxPrice, "with tax.");





