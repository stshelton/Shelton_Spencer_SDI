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


