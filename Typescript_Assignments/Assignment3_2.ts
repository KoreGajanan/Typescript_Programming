/**
 * 2. Create one typescript application which contains one class named as Circle.
Circle class contains two characteristics (Class data members) as Radius, PI.
Create one parametrised constructor which accept one value and assign it to Radius. Value of
PI member is set to 3.14.
In Circle class we have to one method (Behaviours) as Area which will return area of Circle.
After designing the class create two objects of that class by providing some hardcoded value.
Call the method Area by using both the objects. 
 */

export class Circle
{
    //class variables
    iRadius : number;
    PI : number;
    iAns : number;

    //Behaviour
    constructor(iValue: number , PI=3.14)
    {
        this.iRadius = iValue;
        this.PI =PI
    }

    Area()
    {
        this.iAns = this.iRadius * this.iRadius * this.PI ;
        return this.iAns;
    }

}

var iObj3 = new Circle(10);
var iResult : number = 0;

iResult = iObj3.Area();
console.log("Area of Cirlce of first Object is: ",iResult);

var iObj4 = new Circle(12,5);

iResult = iObj4.Area();
console.log("Area of Cirlce of Second Object is: ",iResult);

