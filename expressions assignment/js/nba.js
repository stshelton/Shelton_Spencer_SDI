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

for(var i=1; i<5;i++ )
{
    totalScore = parseInt(questionArray[i])+parseInt(question2)+parseInt(question3)+parseInt(question4);
}
//display total score
console.log("your total score for this basketball game is "+totalScore);
//average per quarter
var averageScore = parseFloat(totalScore)/4;
//display average per quarter
console.log("your average per quarter is "+averageScore);





