/*
 Spencer Shelton
 3/24/15
 section 00
 function assignment
 */


// this is a basic function
function calcAreaf(w,h){
    var area = w*h;
    return area;
}

//function call
var area = calcAreaf(6,8);
console.log("the area of the rect is "+area);

//this is a procedure

function calcAreaP(w,h)
{
    var area = w*h;

    //we do not return this value
    console.log("inside the procedure the area is" +area);
}

//function call for procedure
//just the function name no value to catch it
calcAreaP(6,8);