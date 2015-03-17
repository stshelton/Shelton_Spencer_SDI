/*
 Spencer Shelton
 3/17/15
 section 00
 day 7 scope
 */

// variable scope
// variable inside & outside of a function

//try not to use the same variable names but
//in big files is going to be impossible

//create a variable for width in out main code
//scoped outside of the function - "main code"

var width = 5;

//create a function that calc the perimeter of a rectangle
function calcPeri()
{
    //create a variable called width inside of function
    //scoped to the function calcperi
    var width = 10;

    //create a variable for height and perimeter
    var height = 20
    var perimeter = width *2 + height*2;

    console.log("inside of the function, the perimeter is"+perimeter);

    //what happens in a function stays in a function
}

console.log("before the function call, width =" +width);

//function call
calcPeri();
console.log("after the function call, width ="+width)

//wont work cz perimeter is inside of function
//console.log("outside of the function, the perimeter is "+perimeter


