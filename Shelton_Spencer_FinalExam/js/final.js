/*
 Spencer Shelton
 3/28/15
 section 00
 final exam
 */


//prompt user for the cost of an item
var cost= prompt("how much does that item cost?");

//input validation
while(cost ===""||isNaN(cost))
{
    cost = prompt("Please do not leave blank and enter a number. \n how much does the item cost?");
}

var discount = prompt("how much is that item discounted");

//input validation
while(discount < 0 || discount > 100 || isNaN(discount) || discount ==="")
{


        discount = prompt("Please do not leave blank and enter a number between 0-100.\n How much is that item discounted");

}


//function for discountedCost
function discountedCost(c,d)
{
    var amountDiscounted = c * (d/100);

    var discountedPrice= c -amountDiscounted;

    return discountedPrice;
}
//call the function
var priceWithDiscount = discountedCost(cost,discount);

//display function
console.log("The final cost of an item that costs $"+cost+" with a discount of "+discount+"% is $"+priceWithDiscount);

// i typed in $100 dollars for the cost and it had a 10% discount which gave me the price of $90
// i typed in $50 dollars for the cost and it had a 10% discount which game me the price of $45