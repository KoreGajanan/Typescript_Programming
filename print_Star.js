// Write a program which prints five star on screen
//This class contain actaul logic
var printStar = /** @class */ (function () {
    function printStar(iValue) {
        this.iNo = 0;
        this.i = 0;
        this.iNo = iValue;
    }
    printStar.prototype.display = function () {
        for (this.i = 0; this.i < this.iNo; this.i++) {
            console.log(" * ");
        }
    };
    return printStar;
}());
var obj = new printStar(5);
obj.display();
