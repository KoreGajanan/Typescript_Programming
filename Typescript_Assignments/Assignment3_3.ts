/**
 * 3. Create one typescript application which contains one class named as CircleX which sill
inherits above Circle class.
In CircleX class we have to write one method (Behaviours) as Circumference which will return
circumference of circle.
After designing the class create two objects of that class by providing some hardcoded value.
Call Circumference and Area methods by using both the objects. 
 */

import { Circle } from './Assignment3_2'

class CircleX extends Circle
{

    circumfere : number;
    
    constructor(iRadius : number)
    {
        super(iRadius);        
    }
    Circumference()
    {
        this.circumfere = 2 * this.PI * this.iRadius;
        console.log("Circumference of circle is: "+Math.round(this.circumfere));
        
    }

}

var iObj5 =new CircleX(10);
iObj5.Circumference();


