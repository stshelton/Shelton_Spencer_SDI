/*
 Spencer Shelton
 3/10/15
 section 00
 conditionals
 */


//basic conditional, if we have enough to buy a car

//create a few variables

var budget = 100000;
var carPrice = 120000;
var payCheck = 50000;

if(budget >= carPrice){
    console.log("you can afford the gtr");
}
else{
    console.log("you are broke, take the bus");
}

//we can buy the car if out budget is greater or equal to the car price or out paycheck is more then 20000

// also can be writen if(budget >= carPrice || payCheck > 20000
if(budget >= carPrice || budget+payCheck >= carPrice)
{
    console.log("you can buy the gtr");
}
else
{
    console.log("you broke!");
}
/*
True table for || "or"
t||t = t
t||F = t
f||t= t
f||f = f
 */


/*
truth table for && "and"
t && t = t
t && f = f
f && t = f
f && f = f
 */

// you can buy a car if the budget is greater than or equal th car price and your paycheck is over 20000

if(budget >= carPrice && payCheck > 20000)
{
    console.log("you can buy the gtr");
}
else
{
    console.log("you broke!");
}