//                                                Higher Order Function (HOF)
//                            the function, which accept function as an argument or return a function

function multiplyBy(arg) {
  return function two(number) {
    return arg * number
  }
}
let argMultiplyByNumber = multiplyBy(5);
let result = argMultiplyByNumber(5);
console.log(result);
//                OR
let  argMultiplyByNumber1 = multiplyBy(30)(3);
console.log(argMultiplyByNumber1);



//                      multiple HOF
function multiplyBy1(arg) {
   return function two1(number) {
    return function three1(number1){
      return arg * number * number1;
    }
  }
}

let  argMultiplyByNumber2 = multiplyBy1(30)(3)(2);
console.log(argMultiplyByNumber2);



//                    Another example
function greetMe(fn, name) {            // Higher Order Function
    console.log("Hello, ", name );
    fn();
};
function greet(){                       // Callback function
    console.log("Hey, how are you?");   
};
greetMe(greet, "Shikhil")


// Callback functions : Without passing name of functions in HOF we directly pass callback() in HOF and can pass any function when calling
//    HOF using callback which is standard way to use callback function
function hof(callback) {
    console.log("Inside HOF");
    callback(); // function passed as argument
}

function sayHello() {
    console.log("Hello!");
}

hof(sayHello); // passing a function to another function

// Callback function with parameters and arguments
function func1(callback) {                      // This is Higher Order Function
  console.log("Func 1 executed");
  callback(3)                                   // Calling the callback function
}
function func2(num) {                           // This is Callback Function
  console.log("Func 2 executed", num)
}
func1(func2)

// Callback function with parameters and arguments and performing operations
function getTwoNumbersAndShowResult(num1, num2, callback) {
  console.log(`Number 1 for operation is ${num1} and Number two is ${num2}`);
  callback(num1, num2);
}
function addTwoNumbers(number1, number2) {
  console.log("Addition = " ,number1+number2)
}
function mulTwoNumbers(number1, number2) {
  console.log("multiplcation = " ,number1*number2)
}
getTwoNumbersAndShowResult(4,6,addTwoNumbers);
getTwoNumbersAndShowResult(5,8,mulTwoNumbers);


// Callback function with conditionals
function addNums(n1, n2, callback, onFailure) {       // we can use callback keyword only once in parameter
  if ((typeof n1 === "number") && (typeof n2 === "number")) {
    callback(n1,n2);
  }else{
    onFailure();
  }
}
function onSuccessAdd(num1, num2) {
  console.log(num1+num2)
}
function onFailure() {
  console.log("Please enter a valid number")
}
addNums(8,2,onSuccessAdd,onFailure);