const prompt = require('prompt-sync')();

                                                            // 5. do while loop

                  /*
                    1. loops are used where if you want to run the same code over and over again, each time with a different value.
                    2. when number of iterations are not known then do while loop is used
                    3. first i execute only for the first time, do while loop executes atleast for the one time as condition is checked at the end
                    4. in do while loops we have to state I. initialization i.e. i,  II. number of iteration (n, we can even take it as input), III. variable that need to be printed (like we have to show some end result eg. sum or factorial etc.)
                    5. eg           let n = 5;
                                    let sum = 0;
                                    let i = 1;
                                    do {
                                      sum = sum + i;
                                      i++;
                                    } while (i<=n)
                                    console.log(sum);
                 */

let n = parseInt(prompt("enter number :"));
let sum = 0;
let i = 1;
do {
  sum = sum + i;
  i++;
} while (i<=n);
console.log(sum);

let n2 = parseInt(prompt("enter value for n2 : "));
let prod = 1;
let j = 2;
do {
  prod = prod * j;
  j++;
} while (n2<=j);
console.log(prod);

let arr = [43,54,65,76];
let k = 0;
do {
  console.log(arr[k]);
  k++;
} while (k<(arr.length-1));