/**
 ************************** Application which demonstrates the concept of Selection *********************
 * In case of typescript we can achieve selection using
 * 1. If else construct
 * 2.Switch case
 */

console.log("Marvellous Infosystems: if else constrcut");

function chkEvenOdd(num: number) {
  if (num % 2 == 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

var no = 12;

chkEvenOdd(no);
