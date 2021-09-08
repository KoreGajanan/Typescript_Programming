//Accept single digit no and print it into word


//this function contains actual logic
function printWord(iNo : number):void
{
    switch(iNo)
    {
        case 1:
            console.log("One");
            break;
        case 2:
            console.log("Two");
            break;
        case 3:
            console.log("Three");
            break;
        case 4:
            console.log("Four");
            break;
        default:
            console.log("Invalid number");
            break;
    }
}

//variable defination
var iNo : number = 3;

//function call
printWord(iNo);
