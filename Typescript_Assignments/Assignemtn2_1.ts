/*
1. Write a typescript program which contains one function named as Maximum. That function accepts
array of numbers and returns the largest number from array.
Input : 23 89 6 29 56 45 77 32
Output : Maximum number is 89 

*/

var arr:number[] = [23, 89, 6, 29, 56, 45, 77, 32];

function MaxNo():number
{
    var iMax:number=0;
    for(var i:number=0; i<arr.length; i++)
    {
        if(iMax < arr[i])
        {
            iMax=arr[i];
        }
    }
    return iMax;
}


var iRet:number=0;
iRet=MaxNo();
console.log("********************************** \n Maximum no is ",iRet);