/*
 Spencer Shelton
 3/7/15
 section 00
 expressions assignment
 */


//alert("test")


// questions to ask user
var question = prompts("How many points did you score in the 1st quarter?");
var question2 = prompts("How many points did you score in the 2nd quarter?");
var question3 = prompts("How many points did you score in the 3rd quarter?");
var question4 = prompts("How many points did you score in the 4th quarter?");

//total score
var totalScore = question+question2+question3+question4;
//display total score
console.log("your total score for this basketball game is "+totalScore);

var averageScore = totalScore/4;



