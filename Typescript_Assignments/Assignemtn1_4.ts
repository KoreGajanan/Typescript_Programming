/**4. Write a typescript program which contains one function named as ChkPrime. That function should
accept one number and it should return true if the given number is prime and otherwise return false.
Input : 11
Output : It is prime number */


function DisplayPrime(iNo:number):boolean
{
    var value:number=iNo/2;
    var iNo:number=Math.floor(value);
    

    for(var i:number=2; i<iNo; i++)
    {
        if(value % i == 0)
        {
           
            break;
        }
    }
    if(i==iNo)
    {
        return true;       
    }
    else
    {
        return false;        
    }
}


var iNo:number=11;
var bRet:boolean=false;
bRet=DisplayPrime(iNo);
if(bRet==true)
{
    console.log("It is prime number");
}
else
{
    console.log("It is not prime number");
}

