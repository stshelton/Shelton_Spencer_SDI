/*
 Spencer Shelton
 3/10/15
 section 00
 conditionals worksheet
 */


// question 1 gas

//variables
var mpg = 30;
var leftInTank = prompt("approximately how much do you have left in your tank out of a 100?");
var tankCapacity = 100;


// if statement with hard coded mpg and tank capacity you would have to have less then 66% of your tank left to not make it 200 miles
if(leftInTank>= 66)
{
    console.log("If you have a full tank with "+mpg+"mpg and a tank capacity of "+tankCapacity+" gallons with "+leftInTank+"% then you do not need to stop for gas" );
}
else
{
    console.log ("need gas asap ");
}


//question 2

//variable for question 2
var gradePercentage = prompt("what is your grade percentage for this year out of a 100");
//if statement to determine grade in letter
if(gradePercentage >= 90)
{
    console.log("You have an A.");
}
else if(gradePercentage>=80)
{
    console.log("you got a B");
}
else if(gradePercentage>=70)
{
    console.log("You got a C");
}
else if(gradePercentage>=60)
{
    console.log("You got a D");
}
else
{
    console.log("you got an F");
}