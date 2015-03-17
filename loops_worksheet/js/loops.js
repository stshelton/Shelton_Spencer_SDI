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


//do while to calculate the next time you need oil changed 
while( oilChange <= 100000)
{
    var total = parseInt(oilChange) + 6000;

  oilChange = total;

    console.log("your next oil change will be at "+oilChange+" miles")
}



