//#Accept no from user and prints its factors

//#this function contains logic
function printFactors(iNo : number):void
{
    var iCnt : number = 0 ;
    
    for(iCnt=1 ; iCnt<= Math.floor(iNo/2); iCnt++)
    {
        if(iNo % iCnt == 0 )
        {
            console.log(iCnt);
        }
    }
}




var iNo : number = 12;
//function call
printFactors(iNo);