/*=============================
#***Main Function***********

#This function accept two parameter
#if first parameter divisible by second it return True o.w. it return False
#============================
*/
function checkDivisible(iNo1, iNo2) {
    if (iNo1 % iNo2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
/*variable defination*/
var iNo1 = 20;
var iNo2 = 10;
var bRet = false;
/*Function call*/
bRet = checkDivisible(iNo1, iNo2);
if (bRet == true) {
    console.log("First Number is completly divisible by Second Number");
}
else {
    console.log("First Number is completly divisible by Second Number");
}
