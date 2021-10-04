/**
1. Create one typescript application which contains one class named as Arithmetic.
Arithmetic class contains three characteristics (Class data members) as Number1, Number2.
Create one parametrised constructor which accept two values and assign it to Number1 and
Number2.
In Arithmetic class we have to write four methods (Behaviours) as Addition, Subtraction ,
Multiplication and Division.
Addition method will add Number1 , Number2 & return result.
Subtraction method will subtract Number1 , Number2 & return result.
Multiplication method will multiply Number1 , Number2 & return result.
Division method will divide Number1 , Number2 & return result.
After designing the class create two objects of that class by providing some hardcoded value.
Call all the methods by using both the objects.  */



class Arithmetic
{
    //class variables
    iNo1 : number;
    iNo2 : number;
    iResult : number;

    //Baheviour
    constructor(iValue1 : number, iValue2 : number)
    {
        this.iNo1 = iValue1;
        this.iNo2 = iValue2;
    }

    Addition()
    {
        this.iResult = this.iNo1 + this.iNo2;
        return this.iResult;
    }

    Substraction()
    {
        this.iResult = this.iNo1 - this.iNo2;
        return this.iResult;
    }

    Multiplication()
    {
        this.iResult = this.iNo1 * this.iNo2;
        return this.iResult;
    }

    Division()
    {
        this.iResult = this.iNo1 / this.iNo2;
        return this.iResult;
    }

}


var iObj1 = new Arithmetic(20,10);
var iRet : number = 0;

iRet = iObj1.Addition();
console.log("Addition of iObj1 is: ",iRet);

iRet = iObj1.Substraction();
console.log("Substraction of iObj1 is: ",iRet);

iRet = iObj1.Multiplication();
console.log("Multiplication of iObj1 is: ",iRet);

iRet = iObj1.Division();
console.log("Division of iObj1 is: ",iRet);


var iObj2 = new Arithmetic(15,5);

iRet = iObj2.Addition();
console.log("Addition of iObj2 is: ",iRet);

iRet = iObj2.Substraction();
console.log("Substraction of iObj2 is: ",iRet);

iRet = iObj2.Multiplication();
console.log("Multiplication of iObj2 is: ",iRet);

iRet = iObj2.Division();
console.log("Division of iObj2 is: ",iRet);


