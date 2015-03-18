/*
 Spencer Shelton
 3/17/15
 section 00
 loops worksheet
 */




//next prompt
var oilChange = prompt("When was the last time you changed your oil");
//user validation
while(oilChange == "" || isNaN(oilChange))
{
   oilChange = prompt("Please do not leave blank and type a number. When was the last time you changed your oil?")

}

//do while to calculate next milage to get oil changed

while( oilChange <= 100000)
{
    var total = parseInt(oilChange) + 6000;

  oilChange = total;

    console.log("your next oil change will be at "+oilChange+" miles")
}

//average miles driven in a week

var milesDriven = [];

//for loop to put amount of miles they drove each day into an array to latter be added togther
for(var i = 1;i<8;i++)
{
   milesDriven[i]= prompt("how many miles did you drive on day #"+i);
    //user validation
    while(milesDriven[i] == ""||isNaN(milesDriven[i]))
    {
        milesDriven[i] = prompt("please type a number and do not leave blank. How many miles did you drive on day #"+i);
    }
}
console.log(milesDriven);
//math
var total2 = parseInt(milesDriven[1])+parseInt(milesDriven[2])+parseInt(milesDriven[3])+parseInt(milesDriven[4])+parseInt(milesDriven[5])+parseInt(milesDriven[6])+parseInt(milesDriven[7]);

var averagePerWeek = parseInt(total2)/7;

console.log("your average miles driven in a week is "+averagePerWeek);

var counter = 0


//do while loop
do
{
    counter++
    averagePerWeek--

}while(averagePerWeek >= 2);
// while loop
console.log("If you travel "+counter+" less a week then you'll have traveled less then or equal to 2");






