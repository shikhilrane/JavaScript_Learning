//                                                 Understanding Maths library
//                  a built-in object that allows you to perform mathematical operations on the Number type.

// 1. Basic
console.log(Math.abs(-6));              // to convert negative number to positive number
console.log(Math.round(4.3));           // to round off the value near to decimal value
console.log(Math.ceil(4.1));            // to round off the value directly to upper value even if decimal value is less than 5
console.log(Math.floor(4.9));           // to round off the value directly to lower value even if decimal value is greater than 5
console.log(Math.min(5,2,9,1,7,4,1));   // to check minimum value among the given set of values
console.log(Math.max(5,2,9,1,7,4,1));   // to check maximum value among the given set of values
console.log(Math.sqrt(49));             // to get square root of the given of values
console.log(Math.cbrt(27));             // to get cube root of the given of values
console.log(Math.pow(10,3));            // to check power of base i.e. 10 to the power 3 = 1000
console.log(Math.log(5));               // to check natural log (base e) of the number
console.log(Math.clz32(1));             // it shows binary position in 32 bit represntation
console.log(Math.hypot(2,3));           // to get hypoteneuse of given values

// 2. Constant values in Math library
console.log(Math.PI);                   // value of PI
console.log(Math.E);                    // value of Euler's number
console.log(Math.LN10);                 // natural log of 10
console.log(Math.LN2);                  // natural log of 2
console.log(Math.LOG10E);               // base 10 log of e
console.log(Math.LOG2E);                // base 2 log of e
console.log(Math.SQRT1_2);              // square root of o.5
console.log(Math.SQRT2);                // square root of 2

// 3. Advance maths in Maths Library
console.log(Math.cos(45));              // to check cos value of any number
console.log(Math.sin(45));              // to check sin value of any number
console.log(Math.tan(45));              // to check tan value of any number
console.log(Math.cosh(60));             // to check hyperbolic cos of number
console.log(Math.sinh(60));             // to check hyperbolic cos of number
console.log(Math.tanh(60));             // to check hyperbolic cos of number
console.log(Math.acos(0));              // to check inverse cos of value
console.log(Math.asin(1));              // to check inverse sin of value
console.log(Math.atan(0));              // to check inverse cos of value
console.log(Math.acosh(45));            // to check inverse hyperbolic cos of value
console.log(Math.asinh(1));             // to check inverse hyperbolic sin of value
console.log(Math.atanh(1));             // to check inverse hyperbolic tan of value

// 4. *** Math.random() (Most Important) ***  
console.log(Math.random());  // it generates any random values between 0 & 1 every time we executes
console.log(Math.random()*10);  // it will multilply that random value with 10 to achieve values greater than 1
console.log((Math.random()*10) + 1); // if random() function generate 0 as a random number then *10 will also get zero, to avoid that situation we added +1 in statement so we will get atleast value 1 (this is what we will use when building projects)
console.log((Math.random()*100) + 10); // if we want values between 10 to 99 then this is how we can write
console.log(Math.floor((Math.random()*10) + 1)); // we can convert value to floor, ceil, round, etc
// to set range of number 
let max = 20;
let min = 10;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // this is standard formula to set range
//              ^                           ^             ^
//         to convt value                standard       to avoid 0
//          to round off                 formula        we added min