/*
2. Write a typescript program which contains one function named as Area. That function should
calculate area of circle. Accept value of radius from user and return its area. Default value of PI
should be 3.14 if it is not provided by the caller.
Input : 5
Output : Area of circle is 78.5 
*/

var PI:number=3.14;

function CalArea(radius:number):number
{
    return PI * radius * radius;
}

var value:number=5;
var area:number=0;
area=CalArea(value);
console.log("Area of circle is: ",area);