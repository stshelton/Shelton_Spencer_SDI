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
   timePerWeek[i]= prompt("how many hours do you work out durning your "+i+"  workout of the week")

    //input validation

    if(isNaN(timePerWeek[i])||timePerWeek[i] =="")
    {
        timePerWeek[i] = prompt("please do not leave blank and only use numbers\n how many hours do your work out for this day!");

    }

}

console.log(timePerWeek);
//decrement times a week to its normal value, to use to divide to find there average
parseInt(timesAWeek--);
//variable to store average per week
var averagePerWeek;
//math problem for average time in a week you go to the gym
//need if statements for amount of days you go
if(timesAWeek == 1)
{
   averagePerWeek =  parseInt(timePerWeek[1])/parseInt(timesAWeek);
}
else if(timesAWeek == 2)
{
    averagePerWeek= (parseInt(timePerWeek[1])+parseInt(timePerWeek[2]))/parseInt(timesAWeek);
}
else if(timesAWeek == 3)
{
    averagePerWeek = (parseInt(timePerWeek[1])+parseInt(timePerWeek[2])+parseInt(timePerWeek[3]))/parseInt(timesAWeek);
}
else if(timesAWeek==4)
{
    averagePerWeek = (parseInt(timePerWeek[1])+parseInt(timePerWeek[2])+parseInt(timePerWeek[3])+parseInt(timePerWeek[4]))/parseInt(timesAWeek)
}
else if(timesAWeek == 5)
{
    averagePerWeek= (parseInt(timePerWeek[1])+parseInt(timePerWeek[2])+parseInt(timePerWeek[3])+parseInt(timePerWeek[4])+parseInt(timePerWeek[5]))/parseInt(timesAWeek);
}
else if(timesAWeek == 6)
{
    averagePerWeek = (parseInt(timePerWeek[1])+parseInt(timePerWeek[2])+parseInt(timePerWeek[3])+parseInt(timePerWeek[4])+parseInt(timePerWeek[5])+parseInt(timePerWeek[6]))/parseInt(timesAWeek);
}
else if(timesAWeek == 7) {
    averagePerWeek = (parseInt(timePerWeek[7]) + parseInt(timePerWeek[1]) + parseInt(timePerWeek[2]) + parseInt(timePerWeek[3]) + parseInt(timePerWeek[4]) + parseInt(timePerWeek[5]) + parseInt(timePerWeek[6])) / parseInt(timesAWeek);
}
var e = parseInt(timesAWeek[0])+parseInt(timesAWeek[1]);
console.log("your average time at the gym was "+parseInt(averagePerWeek)+" hours a week");

//question
var favoriteMuscleGroup = prompt("What is your favorite muscle to work out");

//input validation
if(favoriteMuscleGroup == "" || favoriteMuscleGroup>0)
{

    while(favoriteMuscleGroup == "" ||favoriteMuscleGroup>0 )
    {
        favoriteMuscleGroup = prompt("please do not leave blank or answer with a number. What is your favorite muscle to work out ")
    }
}

//if statement to help determine what muscle group is your favorite
favoriteMuscleGroup = favoriteMuscleGroup.toLowerCase();

if((favoriteMuscleGroup == "quad" || favoriteMuscleGroup== "legs") || (favoriteMuscleGroup == "calf" || favoriteMuscleGroup == "hamstring"))
{
    console.log("Ahh so i see your favorite day is legs.")
    //question only if you answer legs
    var weight = prompt("how much do you squat?")
    if(isNaN(weight) || weight == "")
    {

        weight = "please do not leave blank and anwer with a number \n how much do you squat?";
    }
    //ternary for the amount user puts in for the weight they squat
    (weight >= 225) ? console.log("damn 225 or over, keep up the good work") : console.log("under 225?, just keep grinding your get there.");


}
else if((favoriteMuscleGroup == "bicep"||favoriteMuscleGroup=="tricep")||(favoriteMuscleGroup== "shoulders" || favoriteMuscleGroup == "arms"))
{
    console.log("ok you like to work out them pretty boy muscles out, beach much?")
}
else if (favoriteMuscleGroup == "chest")
{
    console.log("ahh i see you favorite day is chest day")
}
else if(favoriteMuscleGroup == "back" || favoriteMuscleGroup == "lats")
{
    console.log("ahh i see your favorite day is back day")
}


// i typed 5 days a week i wor out. 2,3,4,5,6 for the hours a day of those 5 days. which is an average of 4 hours a day. typed in legs for favorite workout. went to ternary.
// typed 225 and it produced the right out come 

