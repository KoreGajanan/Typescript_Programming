/*
2. Write a typescript program which contains one function named as Summation. That function
accepts array of numbers and returns the summation of each number from array.
Input : 23 6 7 4 5 7
Output : Addition is 52 
*/


var arr:number[] = [23, 6, 7 , 4, 5 ,7 ];

function Addition():number
{
    var iSum:number=0;
    for(var i:number=0; i<arr.length; i++)
    {
        iSum=iSum+arr[i];
    }
    return iSum;
}


var iRet:number=0;
iRet=Addition();
console.log("********************************** \n Addition is ",iRet);