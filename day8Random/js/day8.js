/*
 Spencer Shelton
 3/24/15
 section 00
 day 8 random
 */


//create a function that will give us a random integer between two numbers

//create variables for min and max values

var min = prompt("min value?");
var max = prompt("max value");

//function call
var randomNumber = getRandom(min, max);
console.log("your random number between "+min+" and "+max+" is "+randomNumber);

//create our function
function getRandom(min, max)
{
    //generate a random integer
    var ranNumber = Math.round(Math.random()*(max-min)+min);
    return ranNumber;

}

