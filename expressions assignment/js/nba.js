/*
 Spencer Shelton
 3/7/15
 section 00
 expressions assignment
 */


//alert("test")


// questions to ask user
var questionArray=[];
//for loop to display and store user input into array
for(var i=1; i<5;i++ )
{
    questionArray[i] = prompt("How many points did you score in the" + i + " quarter?")
}


//adding the array together
totalScore = parseInt(questionArray[1])+parseInt(questionArray[2])+parseInt(questionArray[3])+parseInt(questionArray[4]);

//display total score
console.log("your total score for this basketball game is "+totalScore);
//average per quarter
var averageScore = parseFloat(totalScore)/4;
//display average per quarter
console.log("your average per quarter is "+averageScore);
console.log(questionArray);

/*		I	typed	in	2,3,4,5	for	the 1st, 2nd, 3rd and 4th, quarter and my	calculator	gave	me
 14 for the total score  and 3.5 for the average points per quarter		*/

/*		I	typed	in	10,20,30,34	for	the 1st, 2nd, 3rd and 4th, quarter and my	calculator	gave	me
 94 for the total score  and 23.5 for the average points per quarter		*/




