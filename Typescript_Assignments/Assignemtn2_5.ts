/*
5. Write a typescript program which contains one function named as ChkString. That function accept
one string and check whether that string contains “Marvellous” word or not.
Input : “Pune Kothrud Marvellous Infosystems”
Output : String contains Marvellous in it.
*/


const myname:string = "Pune Kothrud Marvellous Infosystems"

function CheckString(str:string):void
 {
  
    var result:number=0;
    result = myname.indexOf(str)
    console.log("String contain marvelloues in it",result);
}

CheckString("Marvellous");