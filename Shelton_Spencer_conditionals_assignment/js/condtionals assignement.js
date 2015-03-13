/*
 Spencer Shelton
 3/12/15
 section 00
 conditionals assignment
 */


//amount of time in the gym

var timesAWeek = prompt("how many times a week do you go to the gym");

//using if statement for input validation
if(isNaN(timesAWeek) || timesAWeek=="")
{
    //using while loop to repeatly ask the question in till user puts correct input
    while (isNaN(timesAWeek) || timesAWeek == "") {

        timesAWeek = prompt("please do not leave blank and only use numbers\n how many times a week do you go to the gym?");

    }
}
//printing out your result on the screen
console.log("You go to the gym "+timesAWeek+" a week!");

//if you work out less then 3 days a week you'll get this message
if(timesAWeek < 3)
{
    console.log("Thats it??? 2 or less days, come on now!");
}
else if(timesAWeek>=6)
{
    console.log("ahhh, I see we have a gym rat");
}


var timePerWeek = [];

//incrementing timesAWeek so for loop asks for the exact amount that user inputed
timesAWeek++;

for(var i= 1; i < timesAWeek; i++)
{
   timePerWeek[i] = prompt("how many hours do you work out durning your "+i+"  workout of the week")

    //input validation

    if(isNaN(timePerWeek[i])||timePerWeek[i] =="")
    {
        timePerWeek[i] = prompt("please do not leave blank and only use numbers\n how many hours do your work out for this day!");

    }

}

console.log(timePerWeek)
//decrement times a week to its normal value, to use to divide to find there average
parseInt(timesAWeek--);

var averagePerWeek = (parseInt(timePerWeek[0])+parseInt(timePerWeek[1])+parseInt(timePerWeek[2])+parseInt(timePerWeek[3])+parseInt(timePerWeek[4])+parseInt(timePerWeek[5])+parseInt(timePerWeek[6]))/parseInt(timesAWeek);

console.log("your average time at the gym was "+averagePerWeek+" hours a week");

