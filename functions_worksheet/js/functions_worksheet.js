/*
 Spencer Shelton
 3/17/15
 section 00
 functions worksheet
 */



var radius = prompt ("what is the radius of the circle")

function circumferenceOfCircle(radius)
{
    var diameter = 2 * radius;
    var circumference = diameter * Math.PI;


    console.log("the circumference of the circle is "+circumference);

    return circumference;
}

var catchCircumference = circumferenceOfCircle(radius);

console.log("your circumference out of the function is "+catchCircumference);

var weight = prompt("how much do you weigh")

