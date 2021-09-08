// Accept no from user and print all the digits from 1 to that no

//this function contains logic

function printDigit(iNo : number):void
{
    var i :number = 0;
    for(i = 1; i <= iNo; i++)
    {
        console.log(i);
    }
}


var iNo : number = 7;

//function call
printDigit(iNo);