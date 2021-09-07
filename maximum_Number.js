/*=============================
***Main Function***********

This function accept two parameter
if First parameter or second parameter is less than or equal to zero then it return -1
otherwise it return maximum number
============================
*/
function maximumNumber(iNo1, iNo2) {
    if (iNo1 <= 0 || iNo2 <= 0) {
        return -1;
    }
    if (iNo1 > iNo2) {
        return iNo1;
    }
    else {
        return iNo2;
    }
}
var iNo1 = 10;
var iNo2 = 20;
var iRet;
iRet = maximumNumber(iNo1, iNo2);
console.log("Maximum number is: ", iRet);
