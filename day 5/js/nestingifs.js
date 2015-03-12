/*

 Spencer Shelton
 3/12/15
 section 00
 day 5 nesting ifs

 */

// some decisions  affect other decisions

//if it is warm then lets go the beach, if it is not then lets go to the movies

//get temp
var temp = prompt("we are going to figure out what you should do today!\n what is the current temperature outside");


//input validation
/*if(isNaN((temp)))
{
// this code will run when temp is not a number
//reprompt the user for the information
//fives them a secound chance

temp = console.log ("please only enter a number")
}
*/

//input validation
// this is to check if they didnt type anything
//if(temp == "");
for(var i=1; i > 0; i++) {


    if (isNaN(temp))
    {
       parseInt(temp)[i] =prompt ("please only enter number ?"); //this code will run when temp is not a number
        if (!isNaN(temp))
        {
            break;
        }
    }
    else
    {
        break;
    }
}
//validate that the user typed in a number
// isNaN() - is it not a number

console.log(isNaN(7));//gives us false, is 7 not a number
console.log(isNaN("monkey"))// gives us true, is monkey not a number


//set the water temp ;



if(temp >= 80)
{
    console.log("lets go to the beach");
    var waterTemp = prompt("what is the water temp?");

    //input validation
    if(waterTemp === "" || isNaN(waterTemp))
    {
        waterTemp= prompt("please do not leave blank and only use numbers\n what is the water temp?");
    }

    if (waterTemp > 75){
        console.log("lets go swimming!");

        var knowSwim= prompt("Do you know how to swim?");

        //convert the text string to lower case
        // tolowercase- dot syntax - use a period
        knowSwim= knowSwim.toLowerCase();


        //validate the knowSwim variable
        if(knowSwim != "yes" && knowSwim != "Yes"&& knowSwim !="no" && knowSwim != "No")
        {
            knowSwim = prompt("only can type in yes or no");
            //convert it again to lower case
            knowSwim= knowSwim.toLowerCase();
        }

        if(knowSwim == "yes")
        {
            console.log("you don't need a floatie");
        }
        else
        {
            console.log("you do need a floatie");
        }
    }
    else{
        console.log("lets get a tan");
    }
}
else
{
    console.log("lets go to the movies");

    // do we have kids in the group
    var kids = prompt("are you bringing kids ")
    //validate
    //convert kids into lower case
    kids = kids.toLowerCase();

    if(kids != "yes" && kids != "no")
    {
        //reprompt
        kids = prompt("must type in yes or no")
        kids= kids.toLowerCase();
    }
    //do we have kids in the group

    //test if we have kids
    if(kids==="no"){
        console.log("lets see 50 shades of gray!");
    }
    else{
        console.log("lets go see spongebob");
    }
}

//if the water temp is above 75, lets ggo swiming, if not lets get a tan
/*
if (waterTemp > 75){
    console.log("lets go swimming!");
}
else{
    console.log("lets get a tan");
}
    */