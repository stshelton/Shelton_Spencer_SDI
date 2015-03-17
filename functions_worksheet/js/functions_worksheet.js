/*
 Spencer Shelton
 3/17/15
 section 00
 functions worksheet
 */


//prompt
var radius = prompt ("what is the radius of the circle")
//function to find circumference
function circumferenceOfCircle(radius)
{
    //math
    var diameter = 2 * radius;
    var circumference = diameter * Math.PI;

//display
    console.log("the circumference of the circle is "+circumference);
//return circumference
    return circumference;
}
//catch circumference in variable and call function
var catchCircumference = circumferenceOfCircle(radius);

//display outside of function
console.log("your circumference out of the function is "+catchCircumference);

//prompt
var weight = prompt("how much do you weigh")

function beesToDeath(w)
{
    //math
    var totalNumber= w * 8.666666667
//display
    console.log("If you weighed "+weight+" ilbs then it would take you "+totalNumber+" of bees ");
    return totalNumber;

}

var bees = beesToDeath(weight)

console.log("outside of function you would die from "+bees+" of bees!")
