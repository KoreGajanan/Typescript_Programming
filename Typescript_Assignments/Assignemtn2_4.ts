/*
4. Write a typescript program which contains one arrow function named as ChkArmstrong. That
function accepts one numbers and check whether number is Armstrong number or not.
Input : 153
Output : It is Armstrong number

*/
function CountDigit(iValue:number):number
{
    
    var iCount:number=0;
    while(iValue != 0)
    {
        iValue=Math.floor(iValue/10);
        iCount++;
    }    
    return iCount;
}

function DigitPower(x:number , y: number):number
{      
    var iAns:number=1;
    while(y!=0)
    {
        iAns=iAns * x;
        y=y-1;
    }  
    return iAns;    
}

function checkArmstrong(iValue:number):boolean
{
    var iTemp:number=iValue;    
    var iCnt:number=0;
    var iDigit:number=0;
    var iSum:number=0;
    iCnt=CountDigit(iValue);  

    while(iValue!=0)
    {
        iDigit=iValue % 10;
        
        iSum=iSum + DigitPower(iDigit,iCnt);        
        iValue=Math.floor(iValue / 10);
    }

    if(iTemp==iSum)
    {
        return true;
    }
    else
    {
        return false;
    }
}

var iRet:number=153;
var bRet:boolean=false;
bRet=checkArmstrong(iRet);

if(bRet==true)
{
    console.log("It is Armstrong Number");
}
else
{
    console.log("It is not Armstrong Number");
}


