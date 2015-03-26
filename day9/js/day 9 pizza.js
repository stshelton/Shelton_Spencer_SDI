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

do{
    var pizzaSlices = prompt("how many slices do you want.")
}while(pizzaSlices===""||isNaN(pizzaSlices));


//function call to lordFunction
var results = lordFunctionShtien(pizzaRadius,pizzaCost,pizzaSlices);

//print results to screen
console.log("Your pizza costs $"+results[0]+" per sq inch or $"+results[1]+" per slice.");



//this function will call the other three functions then return the values
function lordFunctionShtien(radius, cost, slices)
{
    // function will call the other 3 functions and the return value

    //call the area function and capture the anwser
    var area = pizzaArea(radius);

    //call the pizza cost function
    var areaCost = pizzaSqInCost(area,cost);

    //call the slices per pirce
    var slicePrice = pricePerSlice(slices, cost)

    //return these answer to our main code
    return[areaCost,slicePrice]


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

    return costPerSqIn;
}

//function to calc price per slice
//s=slice, c=cost
function pricePerSlice(s,c)
{
    //cost/slice
    var costPerSlice= c/s;

    //round to 2 decimal places
    costPerSlice = costPerSlice.toFixed(2);
return costPerSlice;
}