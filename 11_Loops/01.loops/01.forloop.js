const prompt = require('prompt-sync')();

                                                            // 1. for loop
                /*
                    1. loops are used where if you want to run the same code over and over again, each time with a different value.
                    2. when number of iterations are known then for loop is used
                    3. first i execute only for the first time
                    4. in for loops we have to state I. number of iteration (n), II. variable that need to be printed (like we have to show some end result eg. sum or factorial etc.)
                    5. eg           let n = 5
                                    let sum = 0
                                    for (let i = 1;         i <= n;                     i++){
                                             ^              ^                           ^
                                        intialization       loop will execute           this will increase 
                                        of loop             for this no. of times       no. of iterations till no. of i
                                                                                        reaches to no. of n
                                        sum +=i;
                                    }
                                    console.log(sum);
                 */

// a. simple for loop
for (let i = 1; i <= 5; i++) {
    console.log(i);
    /*
    1
    2
    3
    4
    5
    */
}

// b. for loop to print sum of n natural numbers
let n = parseInt(prompt("enter value for n : "));
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum = sum + i;
    /*
    if n = 5
    sum = 0 + 1 = 1;
    sum = 1 + 2 = 3;
    sum = 3 + 3 = 6;
    sum = 6 + 4 = 10;
    sum = 10 + 5 = 15;
    */
}
console.log("addition of first " + n + ` natural number is ${sum}`);

// c. for loop to print factorial
let factorial = 1;
let n2 = parseInt(prompt("enter value for n2 : "));
for (let i = 1; i <= n2; i++) {
    factorial = factorial * i;
    /*
    if n2 = 5
    factorial = 1 * 1 = 1
    factorial = 1 * 2 = 2
    factorial = 2 * 3 = 6
    factorial = 6 * 4 = 24
    factorial = 24 * 5 = 120
    */
}
console.log("factorial of first " + n2 + " natural number is " + factorial);

// d. for loop to print range of numbers
for (let i = 6; i <= 9; i++) {
    console.log(i);
    /*
    6
    7
    8
    9
    */
}

// e. for loop with if statement in it
for (let i = 1; i <= 10; i++) {
    if ((i==5)) {
        console.log("we are at half way");
        // when value of i reaches to 5 then this if block will be executed
    }
    console.log(i);
    /*
    1
    2
    3
    4
    we are at half way
    5
    6
    7
    8
    9
    10
    */
}

// f. nested for loop
for (let i = 1; i <= 10; i++) {
    console.log("outer loop value " + i);
    for (let j = 1; j <= 10; j++) {
        console.log("inner loop value " + j + " and outer loop " + i);
        /*
        inner loop value 1 and outer loop 1
        inner loop value 2 and outer loop 1
        inner loop value 3 and outer loop 1
        inner loop value 4 and outer loop 1
        inner loop value 5 and outer loop 1
        inner loop value 6 and outer loop 1
        inner loop value 7 and outer loop 1
        inner loop value 8 and outer loop 1
        inner loop value 9 and outer loop 1
        inner loop value 10 and outer loop 1
        .
        .
        .
        and so on and so forth till value for i increases upto 10
        */
    }
}

// g. nested for loop for multipliation
for (let i = 1; i <= 10; i++) {
    console.log("outer loop value " + i);
    for (let j = 1; j <= 10; j++) {
        console.log(i + "*" + j + "=" + i*j);
        /*
        1 * 1 = 1
        1 * 2 = 2
        1 * 3 = 3
        1 * 4 = 4
        1 * 5 = 5
        1 * 6 = 6
        1 * 7 = 7
        1 * 8 = 8
        1 * 9 = 9
        1 * 10 = 10
        .
        .
        .
        and so on and so forth till value for i increases upto 10
        */
    }
}