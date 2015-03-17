/*
 Spencer Shelton
 3/17/15
 section 00
 day 7 arguments
 */

//arguments -- goes into the function -- part of the function call
//parameters - catch the argument and in the function definition

//create a function that calculates the area of a rectangle.. again

function calcArea(width, height)
{
   var area = width * height;

    console.log("the area is"+area);
}

//call function sending in arguments
calcArea(20,20);


//prompt user for width and height
var width = prompt("enter width");

var height = prompt("enter a height");

calcArea(width,height);


//return a value from our function to our main code

function calcArea2(w,h)
{
    var area = w*h;
    console.log("inside the function the area is"+area);

    return area;
}



//console log the area
//console.log(area);
//this wont work area in "vegas"

//need to return area;
// and create a variable to catch the return value

var rectArea = calcArea2(10,20)

console.log("outside of the function after returning it the area is  "+rectArea);