/*
3. Write a typescript program which contains one function named as Maximum. That function accepts
array of numbers and returns the second largest number from array.
Input : 23 89 6 29 56 45 77 32
Output : Second Maximum number is 77
*/

var arr:number[] = [23, 89, 6 , 29, 56 ,45, 77, 32 ];

function SecMax():number
{
    var iMax:number=arr[0];
    var iMaxSec:number=0;
    for(var i:number=0; i<arr.length; i++)
    {
        if(iMax < arr[i])
        {
            iMaxSec = iMax;
            iMax = arr[i];
            
        }
        else if(iMax != arr[i] && iMaxSec < arr[i])
        {
            iMaxSec = arr[i];
        }
    }
    return iMaxSec;
}


var iRet:number=0;
iRet=SecMax();
console.log("********************************** \n Second Largest no is ",iRet);
