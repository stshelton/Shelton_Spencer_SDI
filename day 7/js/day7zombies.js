/*
 Spencer Shelton
 3/17/15
 section 00
 day 7 zombies
 */

//zombie attack
//we have accidently created at full sail
//a zombie can bite 4 people a day and tur them into zombies the next day
//cdcd wants to know how many zombies there will be in 8 days

//givens that we know

//var numZombies = 1
var numZombies = 1;

//how many bites per zombie per day
var numBites = 4;

//number of days that CDC wants
var days = 8;

//create for loop calc zombie number

/*
for(var i= 1; i<=days; i++)
{
//how many new zombies get made everyday
    var newZombies = numZombies +numBites;

    //add the new zombies to our exhausted horde.
    numZombies += newZombies

    console.log("there are "+numZombies+ " number of zombies on day #"+i)
}
*/


//how long will it take to get a million zombies

var numDays = 1;

while(numZombies <= 1000000)
{
    //how many new zombies get made everyday
    var newZombies = numZombies * numBites;

    //add the new zombies to our exhausted horde
    numZombies += newZombies;

    console.log("there are"+numZombies+" number of zombies on day #"+numDays+"!")

    numDays++;
}

console.log("it will take"+(numDays-1)+"days to reach a million zombies.");