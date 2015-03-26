/*
 Spencer Shelton
 3/26/15
 section 00
 pizza
 */



//figure out how much a pizza costs per slice and cost per sq in

//prompt the user

var pizzaRadius = prompt("welcome, lets calculate the cost of your pizza! what is the radius of your pizza.");

//validation
while(pizzaRadius===""||isNaN(pizzaRadius))
{
    pizzaRadius = prompt("please do not leave blank and only use numbers\n What is the radius of your pizza");

}

//prompt the user for cost of whole pizza
do {
    var pizzaCost = prompt("how much does your pizza cost in total");

}while(pizzaCost ===""||isNaN(pizzaCost));



//this function will call the other three functions then return the values
function lordFunctionShtien(radius, cost, slices)
{
    // function will call the other 3 functions and the return value

    //call the area function and capture the anwser
    var area = pizzaArea(radius);

    //call the pizza cost function
    var cost = pizzaSqInCost(area,cost);



}







function pizzaArea(r){
    //area = r * r *p
    var area = r*r*Math.PI;
    return area;
}

function pizzaSqInCost(area,price){
    //price / area
    var costPerSqIn= price/area;

    //we should round this number to 2 decimal places
    costPerSqIn = costPerSqIn.toFixed(2);
}

//function to calc price per slice
//s=slice, c=cost
function pricePerSlice(s,c)
{
    //cost/slice
    var costPerSlice= c/s;

    //round to 2 decimal places
    costPerSlice = costPerSlice.toFixed(2);

}