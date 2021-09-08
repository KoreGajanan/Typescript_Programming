//Accept no from user and print its number line 
// input 3
// output -3 -2 -1 0 1 2 3

//this function contains logic
function numberLine(iNo : number)
{
    var iCnt : number = 0;
    for(iCnt = (-iNo); iCnt <= iNo; iCnt++)
    {
        console.log(iCnt);
    }
}


var iNo : number = 3;

//function call
numberLine(iNo);