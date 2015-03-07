/*
spencer shelton
3/7/15
day 3 arrays
section 00
day 3 arrays
 */
//alert("testing to make sure it is linked");

//create a basic array

var avengersNames =["Thor","Hulk","Iron Man", "Captain America" ];

//print out hole array
console.log(avengersNames);

//print out one item
console.log(avengersNames[2]);

// swap items in our array
avengersNames[1]="Black window";

console.log(avengersNames);

// use a variable for the index number
var num = 3;

console.log(avengersNames[num]);

// find the length of an array
// length property = how many items are in an array
// dot syntax - fancy for use a period
console.log(avengersNames.length)

//add an item to our array
avengersNames[4]="Hawkeye";

//adds to next free space which would be 4 in this case
avengersNames[avengersNames.length]= "Wolverine";

console.log(avengersNames);

//pickin oranges

var orangesPicked = [13,350,100];

//how many oranges did we pick in total?
var totalOranges = orangesPicked[0]+ orangesPicked[1] + orangesPicked[2];
console.log("the total number of oranges picked is ", orangesPicked);

var averagePicked = totalOranges/3
//or totalOranges/orangePicked.length

//create an array of fruit
var fruitBowl = ["apple","mango","grape", "banana"];
console.log(fruitBowl);

//push - add item in to the next open spot
//dot syntax - use a period

fruitBowl.push("strawberry");
console.log(fruitBowl);

//pop() - removes the last item from the array
// it also returns the item
var caughtItem=  fruitBowl.pop();

console.log(fruitBowl);
console.log(caughtItem);










