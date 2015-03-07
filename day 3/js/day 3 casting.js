/*
Spencer Shelton
3/7/15
section 00
day 3 casting
 */


//casting variable means treating one datatype like another.. if possible

var stringVar = "6";
var results = 7+ stringVar;
console.log(results);

//number() - treats whatever is inside like a number if possible
var castingResults = 7+ Number(stringVar);
console.log(castingResults);

// cast numbers to be a text string
// string() - treat whatever is inside as a txt string
var areaCode = 407;
var prefix = 555;
var lineNumber =1234

var phoneNumber = String(areaCode) + String(prefix) + String(lineNumber);

console.log(phoneNumber);

console.log("("+areaCode+")"+prefix+"-"+lineNumber);

//Parsing Integers
//parseInt()- looks through a text string and returns an integer
//only the first number in the string is returned
// if the first character in the text string canNOT be converted into a number, then it returns NAN = not a number

var a = parseInt("40 years old ");
console.log(a);

var b = Number("40 years old");
console.log(b);

//only finds number is its first
var c = parseInt("he was 40 years old");
console.log(c);

//prompts only return txt strings

var tshirtsOwned =  prompt("how many tshirts do you currently own?");

//ask the user how many they bought
var tshirtsBought = prompt("how many tshirts do you buy today");

//calculate the total number of tshirts
var totalShirts = tshirtsOwned + tshirtsBought;
//this will not work because both variables are text strings not numbers
    //fix this by casting either number()
var totalShirts2 = parseInt(tshirtsOwned)+ parseInt(tshirtsBought)

console.log("you currently own "+ totalShirts2+ " shirts.")

