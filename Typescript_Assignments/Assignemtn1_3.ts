/**
 * 3. Write a typescript program which contains one function named as DisplayFactors. That function
should accept one number and display factors of that number.
Input : 20
Output : 1 2 4 5 10
 * 
 */

function DisplayFactors(iNo:number):void
{
    for(var i:number=1; i<=iNo/2; i++)
    {
        if(iNo % i == 0)
        {
            console.log("Factors are ",i);
        }
    }
}


var iNo:number=20;

DisplayFactors(iNo);