/*
 Spencer Shelton
 3/7/15
 section 00
 expressions assignment
 */


//alert("test")


// questions to ask user
var questionArray=[];
for(var i=1; i<5;i++ )
{
    questionArray[i] = prompt("How many points did you score in the" + i + "st quarter?")
}


//adding the array together
totalScore = parseInt(questionArray[1])+parseInt(questionArray[2])+parseInt(questionArray[3])+parseInt(questionArray[4]);

//display total score
console.log("your total score for this basketball game is "+totalScore);
//average per quarter
var averageScore = parseFloat(totalScore)/4;
//display average per quarter
console.log("your average per quarter is "+averageScore);





