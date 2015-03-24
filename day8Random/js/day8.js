/*
 Spencer Shelton
 3/24/15
 section 00
 day 8 random
 */


//create a function that will give us a random integer between two numbers

//create variables for min and max values

var min = prompt("lets find a random number between two values\nmin value?");
while(isNaN(min) || min ==="")
{
   min = prompt("please enter a number and do not leave blank.")
}
var max = prompt("max value?");
while(isNaN(max)|| max === "" || parseInt(max) <= parseInt(min) )
{
    max = prompt("please enter a number bigger then the min and do not leave blank. ")
}

//function call
var randomNumber = getRandom(min, max);
console.log("your random number between "+min+" and "+max+" is "+randomNumber);

//create our function
function getRandom(min, max)
{
    //generate a random integer
    var ranNumber = Math.round(Math.random()*(max-min)+parseInt(
    min));
    return ranNumber;

}


for(var i = 0; i<15; i++)
{
    //wont work will repeat answer 15 times
    //console.log(ranNumber)

    console.log(getRandom(min,max));
}
