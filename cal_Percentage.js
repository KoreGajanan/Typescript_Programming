//Accept marks from user and calculate the percentage
//This function calculate percentage
function calPerc(iObtain, iTotal) {
    var fAns = 0;
    fAns = iObtain / iTotal * 100;
    console.log("fAns is: ", fAns);
    return fAns;
}
//This function display result as per class 
function displayRes(fInput) {
    if (fInput >= 70) {
        console.log("Distinction \n");
    }
    else if (fInput >= 60) {
        console.log("First class \n");
    }
    else if (fInput >= 50) {
        console.log("Second class  \n");
    }
    else if (fInput >= 40) {
        console.log("Pass class \n");
    }
    else {
        console.log("Fail \n");
    }
}
var iMarks = 777;
var fResult = calPerc(iMarks, 1000);
displayRes(fResult);
