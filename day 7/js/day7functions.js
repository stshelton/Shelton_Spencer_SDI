/*
 Spencer Shelton
 3/17/15
 section 00
 day 7 functions
 */



// the basic structure of  function
// function functionName(){code to run}

//Create a function that will console log out hello

function printHello(){

    console.log("hello!")
}

//function call the print hello function
// functionname();

printHello();



//using parameters
function name (spencer, rime ){
    var total = spencer + rime
    console.log(total);

}

name(4,5);

//create a function that calculates the area of a rectangle

function calcArea()
{
    //create variables for width, height, and area
    var width = 20;
    var height = 30;
    var area = width * height;

    console.log("the area is "+area);
}
calcArea();


