/**
 * ***************Application which demonstrates the concept of selection*******************
 * In case of typescript we can achive selection using
 * 1.If else construct
 * 2.switch case
 * below application demonstrates concept of switch
 * in this application we display timing of school depends on the division
 * ===================================================
 * The following rules apply toa switch statements--
 * There can be any number of case statements within a switch.
 * The case statements can include only constants.It connot be a variable or an expression.
 * The data type of the varible_expression and the constant expression must match.
 * Unless you put a break after each block of code, execution flows into the next block
 * The case expression must be unique
 * The default block is optional.
 */

var Div : string = "B";
console.log("Marvellous Infosystems: Switch Case");

switch(Div)
{
    case "A":
        {
            console.log("Timing : 7 AM to 11 AM");
            break;
        }
    case "B":
        {
            console.log("Timing : 9AM to 12 AM");
            break;
        }
    case "C":
        {
            console.log("Timing : 1 PM to 6 PM");
            break;
        }
    case "D":
        {
            console.log("Invalid Division");
            break;
        }
}
