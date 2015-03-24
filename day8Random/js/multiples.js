/*
 Spencer Shelton
 3/24/15
 section 00
 multiples
 */


//create multiple functions using info from user

//calc the perimeter and area of a rectangle

function periRect(w,h)
{
//perimeter = 2 + width + 2 = height
    var p = 2*w +2*h;
    return p;
}
//create an anon function for the area

var areaRect = function(w,h)
{
    var area = w*h;
    return area;

};

//prompt user for width and height

var width= prompt("lets firgure out the perimeter and area of a triangle. \n what is the width:");
//validation
while(width === "" || isNaN(width))
{
    width = prompt("please do not leave blank and only use numbers. \n What is your width ");

}

width=parseInt(width);

var height = prompt ("what is the height of the rectangle?");

//validation
while(height ===""|| isNaN(height))
{
    height = prompt ("please do not leave blank and only use numbers \n what is the height");
}

//parseint

height = parseInt(height);

//function calls
var resultPeri = periRect(width,height);
var resultArea = areaRect(width,height);

//combined console log

console.log("the perimeter of your rectangle is "+resultPeri+" and the area is "+resultArea+".");

//create a combined function

function combinedRect(w,h){
    //first calc the perimeter
    var p = 2*w +2*h;

    //calc area
    var a = w*h;

    //return both values using an array
    return [p,a];
}


//function call the combined array
var combinedResults = combinedRect(width, height);

console.log(combinedResults);
console.log("the perimeter of your rectangle is " +combinedResults[0]+ " and the area is "+combinedResults[1]+".");