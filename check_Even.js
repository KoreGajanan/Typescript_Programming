/*=============================
***Main Function***********

This function accept one parameter
if parameter is even then this function return True o.w. it return False
============================
*/
function checkEven(iNo) {
    if (iNo % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
/*variable defination*/
var iNo = 12;
var iRet = false;
/*Function call*/
iRet = checkEven(iNo);
if (iRet == true) {
    console.log("Entered number is even.....\n");
}
else {
    console.log("Entered number is odd.....\n");
}
