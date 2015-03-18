/*
 Spencer Shelton
 3/17/15
 section 00
 day 7 array
 */




//tel each member of the scooby gang that they solved a mystery

// create an array of gang members
var names = ["Scooby doo", "shaggy", "velma", "daphne", "fred"];

names.push("Scrappy");

//create for loop to cycle through the array

for(var i= 0; i<names.length; i++){
    console.log("you solved the case "+names[i]+"!")


}

//keep track of our bills and get total an average

var bills =[50,10,5,20,10, 60, 70];
//create a variable to track the itme total
var numItems = 0;
var total= 0;

for( var j = 0; j <bills.length; j++)
{
    //only add them if they are equal or over 15
    if( bills[j]>= 15) {
        //add each bill to the total

        total += bills[j];
        //if above 15 it will add to items
        numItems++;
    }

}

console.log("the total is "+total);

average = total/numItems;

console.log("the total is"+average);

