/*Application which demonstrates the concept of Iteration*/
/**
 *  Iteration is the concept where we can execute one or more statements multiple times
 * In typescript we can achieve iteration using
 * For loop
 * while loop
 * do-while loop
 * below application demonstrates use of each type of loop
 */

var no: number = 5;
var i: number = 0;

console.log("Marvellous : For loop demonstration: => ");
for (i = 0; i < no; i++) {
  console.log(i);
}

console.log("Marvellous : While loop demonstration: => ");
i = 1;

while (i <= no) {
  console.log(i);
  i++;
}

console.log("Marvellous : do-while loop demonstration: => ");
i = 1;

do {
  console.log(i);
  i++;
} while (i <= no);
