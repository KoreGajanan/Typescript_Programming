// Write a program which prints five star on screen

//This class contain actaul logic
class printStar 
{
  iNo: number = 0;
  i: number = 0;
  constructor(iValue: number) 
  {
    this.iNo = iValue;
  }

  display():void
  {
    for (this.i = 0; this.i < this.iNo; this.i++) 
    {
      console.log(" * ");
    }
  }
}

var obj = new printStar(5);
obj.display();


