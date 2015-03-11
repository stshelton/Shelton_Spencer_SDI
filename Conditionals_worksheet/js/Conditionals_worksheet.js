/*
 Spencer Shelton
 3/10/15
 section 00
 conditionals worksheet
 */


// question 1 gas

//variables
var mpg = 15;
var leftInTank = prompt("approximately how many miles do you have left in the tank");
var tankCapacity = 100;
var totalDistance = parseInt(mpg) *parseInt(tankCapacity);
var tankPercent=  parseInt(totalDistance) - leftInTank;
var distance = totalDistance - tankPercent;



// if statement with hard coded mpg and tank capacity you would have to have less then 66% of your tank left to not make it 200 miles
if(distance >= 200)
{
    console.log("If you have a full tank with "+mpg+"mpg and a tank capacity of "+tankCapacity+" gallons with "+leftInTank+" left in your tank  then you do not need to stop for gas" );
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

//question 3

//movie theater

// variables assigned to prompts to ask what time there going to the movie and how old they are

var age = prompt("how old are you?")
var time= prompt("what time is it")

//if statement to determine weather or not they get  discount
if((age >= 55 || age <=7) || (time >= 3 && time <= 6))
{
    console.log("the movie ticket cost $7.");
}
else
{
    console.log("the movie cost $12")
}