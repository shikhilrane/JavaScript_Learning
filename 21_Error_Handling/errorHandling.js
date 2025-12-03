//                                                 Error Handling (way to handle error)

// 1. compile time error  (error occurs during compilation process)
// syntax error
// These types of errors are caught *before* the code runs.
// console.log(1;


// 2. run rume error   (error when code run after compilation here code before eroor will run but as it catches error then code will stop)
// console.log("this is x");
// console.log(x);

//                                             try-catch-finally block to handle errors
// NOTE : when we think particular line of code will throw error then put that code inside try-catch block 
// The code inside 'try' is executed, and if any error occurs,
// it is caught by the 'catch' block.

// 1. when error occured
try {
    console.log("try block starts here");       // entered in try block (this will execute)
    console.log(x);                             // error occured as we have not declared x and trying to print it
    console.log("try block ends here");         // unreachable line of code because when error will occur (like in above line), then it will sent to catch block 
} catch (error) {                               // code execution will come here as error occured
    console.log("error is catched from try block"); // as it catches error from try block, code execution will come here
    console.log("Your error is : ", error);         // it will which specific print is occured
} finally{                                      // finally block will everytime even if error occurs or not
    console.log("It will run everytime as this is finally block, error occured and run");
}

// 2. when error not occured
let a = 10;
try {
    console.log("try block starts here");       // entered in try block (this will execute)
    console.log(a);                             // error not occured
    console.log("try block ends here");         // print this after print 'a'
} catch (error) {                               // code execution will not come here as error not occured
    console.log("error is catched from try block");
    console.log("Your error is : ", error);
} finally{                                      // finally block will everytime even if error occurs or not
    console.log("It will run everytime as this is finally block, error not occured but still run");
}

// 3. throwing custom error (sometime we need to throw own error)
// Sometimes, instead of relying on JavaScript's default errors, we may want to throw our own custom error messages using the `throw` statement.
// example 1 : Wrapping a ReferenceError
try {
    // Reference error
    console.log(x);
} catch (error) {
    throw new Error("You have not defined value for x");// Instead of letting the default error propagate, we throw a custom error with a more meaningful message.
}

// example 2 : Throwing based on condition
let errorCode = 100;    // Simulate a situation where a specific error code needs custom handling
if (errorCode==100) {
    throw new Error("Invalid JSON") // You can throw a custom error message for this specific case
}