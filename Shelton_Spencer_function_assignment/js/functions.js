/*
 Spencer Shelton
 3/24/15
 section 00
 function assignment
 */

//1st question
var MPh = prompt("Lets see how long it will take you to get to you destination. \nHow fast are you going?");
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
    console.log("it will take you " + time + " minutes to get to your destination");
}
else
{
    console.log("it will take you " + time + " hours to get to your destination");
}

// 3rd prompt
var gallonsLeftInTank = prompt("Lets see if you need gas to get to your destination. \nhow many gallons do you have left in you tank?");

//input validation
while(gallonsLeftInTank ==="" || isNaN(gallonsLeftInTank))
{
    gallonsLeftInTank = prompt("please do not leave blank and enter a number.\n how many miles do you have left in you tank?");
}

//4th prompt
var mpg = prompt("what is your mile per gallon. ");

//input validation
while(mpg ===""||isNaN(mpg))
{
    mpg = prompt("please do not leave blank and enter a number.\n what is your gas miles per gallon.")

}
//anon function to find out if gas is needed
var Gas = function(Gl,Mpg,MG)
{
    //finding total amount of gas left
    var totalGasLeft =Gl*Mpg;
//if statement to display weather or not they need gas
    if(totalGasLeft > MG)
    {
        console.log("you do not need to get gas")
    }
    else
    {
        console.log("you should get gas asap you will not make it"+MG+" miles.")
    }

    return [totalGasLeft, MG,Mpg];


}

var gasLeft=Gas(gallonsLeftInTank,mpg,milesGoing);

console.log("You have "+gasLeft[0]+" miles left in your tank, your miles per gallon is "+gasLeft[2]+" and you are  "+gasLeft[1]+" miles away from your destination.")

