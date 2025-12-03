
// The break statement terminates the current loop or switch statement and transfers program control to the statement following the terminated statement.

// "break;" in for loop
for (let i = 1; i <= 10; i++) {
    if (i==7) {
        console.log("we have reached 7");
        break;
        // when value of i reaches to 7 then execution of the loop will be stopped
    }
    console.log(i);
  }
  /*
  o/p =>
  1
  2
  3
  4
  5
  6
  */


// "break;" in while loop
let j = 1;
while (j<=10) {
  if (j==7) {
    console.log("j has reaches to 7");
    break;
  }
  console.log("good");
  j++;
}
/*
o/p =>
good
good
good
good
good
good
j has reaches to 7
*/

// "break;" in do while loop
let n3 = 5;
let k = 1;
do {
  if (k==3) {
    console.log("value of k reached to 3");
    break;
  }
  console.log(k);
  k++;
} while (k<=n3);
/*
o/p =>
1
2
value of k reached to 3
*/
