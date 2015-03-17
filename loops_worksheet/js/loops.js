/*
 Spencer Shelton
 3/17/15
 section 00
 loops worksheet
 */


//prompt
var milesOnCar = prompt("how many miles do you have on your car");
//user validation
while(milesOnCar == "" || milesOnCar === isNaN(milesOnCar))
{
    milesOnCar = prompt("please do not leave blank and type a number. How many miles do you hav on your car?");
}
//display on screen
console.log("you have"+milesOnCar+" miles on your car.")



for(var i = 0; i < 100000; i+30000 )
{

}