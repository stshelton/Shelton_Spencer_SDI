/*
 Spencer Shelton
 3/17/15
 section 00
 day 7 beer
 */



// code the song 99 bottles of beer on the wall

//basic structure of for loop

for(var i =99; i>0; i--)
{
    if(i===1) {
        console.log(i + " bottles of beer on the wall. " + i + "bottles of beer. you take one down and pass it around. No more bottles of beer on the wall");
    }


    else
    {
        console.log(i + " bottles of beer on the wall. " + i + "bottles of beer. you take one down and pass it around." + (--i) + "bottles of beer on the wall");

    }

}