/*

 Spencer Shelton
 3/12/15
 section 00
 day 5 steaks

 */

// test steak temp and tell the user the done-ness level


/*
 Extra-rare or Blue (bleu)		115–120 °F
 Rare (saignant)		        125–130 °F
 Medium rare (à point)	        130–140 °F
 Medium (demi-anglais)	        140–150 °F	145 °F and rest for at least 3 minutes
 Medium well (cuit)		        150–155 °F
 Well done (bien cuit)          160 °F+	160 °F for ground beef
 */

//create a variable for our steak temp
var steakTemp = prompt("what is the temp of your steak?");

//we have to test each of the cases above to see where our temp falls into

if(steakTemp < 115)
{
    console.log("you steak is uncooked");
}
else if(steakTemp < 125)
{
    console.log("your steak is extra rare or blue");
}
else if(steakTemp < 130)
{
    console.log("your steak is rare");
}
else if(steakTemp < 140)
{
    console.log("your steak is medium rare");
}
else if (steakTemp<155)
{
    console.log("your steak is medium well");
}
else if (steakTemp >= 160 )
{
    console.log("your steak is well done");
}
else {
    console.log("your steak is burnt");
}



for(var i=0;i>6;i++)
{
    var tempofsteak = [uncooked = 115 <= 125,rare = 125,]
    if(steakTemp[i]);

}