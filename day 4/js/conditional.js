/*
 Spencer Shelton
 3/7/15
 section 00
 conditionals
 */


// basic conditonals
/*
if(conditional to test)
code to run if the condition is true
 */

// create a boolean variable
var oldEnough = false;

// if the kid is old enough, he can ride the ride
if(oldEnough)
{
    //code to run if the kid is old enough
    console.log("the kid is old enough to ride the coaster");
}
else
{
  //code to run if the kid is not old enough
    console.log("the kid is not old enough to ride the coaster");
}

//relational operators

//if the kid is 48 inches tall then he can ride the coaster
var kidHeight = prompt("how tall are you");

//test kids height
if(kidHeight > 48)
{
    console.log("you can ride the ride ");

}
else if (kidHeight > 100 )
{
    console.log("your to tall to ride this ride");
}
else
{
    console.log("sorry your not tall enough");
}
