/*
 Spencer Shelton
 3/24/15
 section 00
 anonymous function
 */


//basic function
/*
function FunctionName(){

}
 */

//anonymous function
/*
var functionName = function()
{


}
 */

//action function are extremely popular in js and jQuery
// highly used in object oriented programing
//quick and easy
// you can use either a basic or anon - for now

//function calls above def

//basic function call
var basicArea2 = triangleArea(2,9);
console.log("the area from the basic function before the definition is "+basicArea2);

/* this DOES NOT WORK!! DO NOT PUT IT ABOVE THE DEFINITION !!
//anon function call
var anonArea2= triangleAreaAnon(3,4);
console.log("the area from the anon function before the definition is"+anonArea2);

*/




//build a basic function for area of triangle

function triangleArea(b,h)
{
    var area = .5 * b*h;
    return area;

}

//anonymous function

var triangleAreaAnon = function(b,h)
{
    var area = .5 * b*h;
    return area;
}

//function call to basic function

var basicArea = triangleArea(5,6);

console.log("the area from the basic function is "+basicArea);

//function  all to the anon function

var anonArea = triangleAreaAnon(4,5);

console.log("the area from the anon function is "+anonArea);

