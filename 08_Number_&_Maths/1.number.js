//                                                  Understanding NUMBERS
//                           1. when we directly create variable and assign number to it thats first method
//                           2. when we create number by constructor method it is called explicit method number
//                           3. we usually create number by constructor method when have to apply some properties and methods to numbers

let num = 32;                   // normal method 
console.log(num);               // o/p => 32
console.log(typeof num);        // o/p => Number

let number = new Number (45);   // this is how we define explicitly define it as number
console.log(number);            // o/p => [Number: 45]
console.log(typeof number);     // o/p => object

// properties and methods of numbers

// 1. convert number into string (.toString())
console.log(number.toString());
console.log((number.toString()).length); // we applied string property after converting number into string
console.log(typeof (number.toString()));

// 2. convert string into integer or float type of number
let strNum = "43"
console.log(strNum);
console.log(typeof strNum);
let strNumI = Number.parseInt(strNum)
console.log(strNumI);
console.log(typeof strNumI);
let strNumF = Number.parseFloat(strNum)
console.log(strNumF);
console.log(typeof strNumF);

// 3. when we have to provide decimals we use this method (.toFixed())
console.log(number.toFixed(2));  // it returns as a string

// 4. to convert number in exponential form (.toExponential())
console.log(number.toExponential(8));   // it returns as a string

// 5. to check what value is stored in particular variable (.valueof()). it can be use anywhere like in arrays, string, object, function, etc
let number2 = "45";
console.log(number2.valueOf());

// 6. to provide precisied value (.toPrecision()), it precised the value upto value we provide in bracket
let otherNumber = 29.37543;
console.log(otherNumber.toPrecision(2));    // it will round of first 2 values to near integer. If number is 29.6 then it will give 30
console.log(otherNumber.toPrecision(3));    // we provided 3 here to round off first 3 values

// 7. to read large numbers we use (.toLocaleString());
let largeNum = 10000000;
console.log(largeNum.toLocaleString("en-IN")); // to read number by indian standards we use "en-IN"

// 8. other number properties (widely use for cp)
console.log(Number.MAX_VALUE);          // to check what is maximum value
console.log(Number.MIN_VALUE);          // to check what is minimum value
console.log(Number.MAX_SAFE_INTEGER);   // to check what is maximum safe integer
console.log(Number.MIN_SAFE_INTEGER);   // to check what is minimum safe integer
console.log(Number.POSITIVE_INFINITY);  // to check what is positive infinity
console.log(Number.NEGATIVE_INFINITY);  // to check what is negative infinity
console.log(Number.EPSILON);            //
console.log(Number.isFinite(6));        // it checks if number is finite or infinite
let nan = NaN;
console.log(Number.isNaN(nan));         // it checks if number is NaN or not
console.log(Number.isInteger(2));       // it checks if number is integer or not
console.log(Number.isSafeInteger(1));   // it check if given integer is safe or not
console.log(Number.parseInt("5"));      // it convert any data type into integer number
console.log(Number.parseFloat("5.3"));  // it convert any data type into float number