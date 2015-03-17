/*
 Spencer Shelton
 3/17/15
 section 00
 loops worksheet
 */


//prompt
var milesOnCar = prompt("how many miles do you have on your car");
//user validation
while(milesOnCar == "" || isNaN(milesOnCar))
{
    milesOnCar = prompt("Please do not leave blank and type a number. How many miles do you hav on your car?");
}
//display on screen
console.log("you have "+milesOnCar+" miles on your car.")

//next prompt
var oilChange = prompt("When was the last time you changed your oil");
//user validation
while(oilChange == "" || isNaN(oilChange))
{
   oilChange = prompt("Please do not leave blank and type a number. When was the last time you changed your oil?")

}

//array to hold miles of when to change oil
var upcomingOilChange = [];
var addedMiles;

parseInt(oilChange);

//for loop to add 3000 miles to the existing miles to know when to change your oil till 100,000 miles

for(var i = 0; i < 5 ; i++)
{

        upcomingOilChange = parseInt(oilChange) + 3000;

}

console.log(upcomingOilChange);


