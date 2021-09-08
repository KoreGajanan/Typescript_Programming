//#Accept no from user and print table of that number (10 multiple of that number)


//#this function contains logic
function printTable(iNo : number ):void
{
    var iMult : number = 0;
    var iCnt :number = 0;

    for(iCnt = 1; iCnt <= 10 ; iCnt++)
    {
        iMult = iCnt * iNo;
        console.log(iMult);
    }
}


var iNo : number = 5;

//function call
printTable(iNo);