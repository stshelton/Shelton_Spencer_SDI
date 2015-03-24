/*
 Spencer Shelton
 3/24/15
 section 00
 function assignment
 */

//1st question
var MPh = prompt("How fast are you going?");
//input validation
while(MPh ==="" || isNaN(MPh))
{
    MPh = prompt("please don't not leave blank and type in a number? ");
}

//2nd question
var milesGoing = prompt("how far do you plan on going in miles? ");
//input validation
while(milesGoing ==="" || isNaN(milesGoing))
{
    milesGoing = prompt("please don't not leave blank and type in a number? ");
}
//function to find amount of time traveled
function timeToTravel(M,MG)
{
    var time = MG/M;

    return time;
}
//call function
var time = timeToTravel(MPh,milesGoing);

//log results
if(time < 1)
{
    console.log("it will take you " + time + "minutes to get to your destination");
}
else
{
    console.log("it will take you " + time + "hours to get to your destination")
}

