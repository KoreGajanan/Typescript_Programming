/*
5. Write a typescript program which contains one function named as Fibonacci. That function accept
one number from user and print Fibonacci series till that number.
Input : 21
Output : 1 1 2 3 5 8 13 21
*/


function DisplayFibonacci(iValue:number):void
{
    var a:number=0;
    var b:number=1;
    var c:number=0;
    for(var i:number=0; i < iValue; i++)
    {
        if(c<i)
        {           
            a=b;
            b=c;
            c=a+b;
            console.log(c);
        }
        
    }


}

var iNo:number=21;
DisplayFibonacci(iNo);