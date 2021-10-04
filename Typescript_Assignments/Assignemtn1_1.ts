/*
 1. Write a typescript program which contains one function named as Maximum. That function accepts
three parameters and it should returns largest value from three input parameters.
Input : 23 89 6
Output : Maximum number is 89
 */

function MaximumNo(value1:number,value2:number,value3:number):number
{
    if(value1 > value2 && value1 > value3)  
    {
        return value1;
    }
    else if(value3 > value1 && value3 > value2)
    {
        
        return value3;
    }
    else if(value2 > value3 && value2 > value3)
    {
        
        return value2;
        
    }
    
}

var no1:number=23;
var no2:number=89;
var no3:number=6;
var result:number=0;

result=MaximumNo(no1,no2,no3);
console.log("Maximum no is: ",result);

