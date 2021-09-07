/*=============================
***Main Function***********

This function accept two parameter
if First parameter or second parameter is less than or equal to zero then it return -1
otherwise it return maximum number
============================
*/
function maximumNumber(iNo1:number,iNo2:number):number
{
	if(iNo1 <= 0 || iNo2 <= 0)
	{
		return -1;
	}
	if(iNo1 > iNo2 )
	{
		return iNo1;
	}
	else
	{
		return iNo2;
	}
}

/*variable defination*/

var iNo1:number = 10;
var iNo2:number = 20;
var iRet:number = 0;

/*Function call*/

iRet = maximumNumber(iNo1,iNo2);
console.log("Maximum number is: ",iRet);
