const prompt = require('prompt-sync')();

                                                          // 4. while loop
                  /*
                    1. loops are used where if you want to run the same code over and over again, each time with a different value.
                    2. when number of iterations are not known then while loop is used
                    3. first i execute only for the first time
                    4. in while loops we have to state I. initialization i.e. i,  II. number of iteration (n, we can even take it as input), III. variable that need to be printed (like we have to show some end result eg. sum or factorial etc.)
                    5. eg           let n = 5;
                                    let sum = 0;
                                    let i = 1;
                                    while (i<=n) {
                                      sum = sum + i;
                                      i++;
                                    }
                                    console.log(sum);
                 */
// a. simple while loop
let m = 1
while (m<=5) {
  console.log("op");
  m++;
}

// b. factorial using while loop
let n = parseInt(prompt("Enter the Number : "));
let factorial = 1;
let i = 1;
while(i<=n){
  factorial = factorial * i;
  /*
  factorial = 1 * 1 = 1
  factorial = 1 * 2 = 2
  factorial = 2 * 3 = 6
  factorial = 6 * 4 = 24
  factorial = 24 * 5 = 120
  */
  i++;
}
console.log(factorial)

// c. addition using while loop
let n2 = parseInt(prompt("enter number for iteration : "));
let sum = 0;
let j = 1;
while (j<=n2) {
  sum = sum + j;
  /*
  sum = 0 + 1 = 1;
  sum = 1 + 2 = 3;
  sum = 3 + 3 = 6;
  sum = 6 + 4 = 10;
  sum = 10 + 5 = 15;
  */
  j++;
}
console.log(sum);

let myArray = ["one", "two", "three"];
let k = 0;
while (k<(myArray.length-1)) {
  console.log(myArray[k]);
  k++;
}