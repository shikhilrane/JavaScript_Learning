//                                                                  Data Types

//                                                              ------------------

// there are basically 2 types of data types, A. Primitive data types & B. Object data types

//                               A. Primitive data types (Null Number Boolean BigInt String Symbol Undefined (nn bb ss u))

// 1. Null
let a = null;
console.log(a);
console.log(typeof a); //it is a primitive data type but act as a object

// 2. String
let b = "Hello world";
console.log(b); // it is used to store text
console.log(typeof b); 

// 3. numbers
// there are two types of numbers primitive and constructor
// 3.1 Primitive
let c = 32; // whole number
let c1 = 32.4; // floating number
let c2 = 5e3; // exponential number
console.log(c, c1, c2);
console.log(typeof c, typeof c1, typeof c2); //number
// 3.2. constructor
let c3 = new Number(33);    // whole number
let c4 = new Number(33.2);  // floating number
let c5 = new Number(4e4);   // exponential number
console.log(c3, c4, c5);
console.log(typeof c3, typeof c4, typeof c5); //objects

// 4. boolean
let d = 4>3;
console.log(d);
console.log(typeof d);

// 5. undefined
let e;
console.log(e);
console.log(typeof e);

// 6. BigInt (this is way to represent whole number larger than 2^32 - 1, 2^32 - 1 is largest number in JS without BigInt)
const BI = BigInt(43) + BigInt (11);
console.log(BI);
console.log(typeof BI);

// 7. Symbols
// primitive data type can't create unique keys that is why symbols are created, with the help of symbols we can create unique keys
let k1 = Symbol (41);                                   //declaring symbols
let k2 = Symbol (42);
console.log(k1);
console.log(typeof k1);
console.log(k2);
console.log(typeof k2);
let myObj = {};                                             // creating object
myObj[k1] = ("this is versatile number");
myObj[k2] = ("this is not versatile number");
console.log(myObj);                                     // output
console.log(myObj[k1]);                                 // indivisual output
console.log(myObj[k2]);                                 // indivisual output
console.log(typeof myObj);





//                                  B. Object data type (Array, function, Object, date)

// 1. Array
/*
    a. It is a type of object used to store multiple values in single variables
    b. it can contain number, string, boolean, function
    c. Each value in array has numeric position known as index
    d. array index starts from 0
*/
let x = [["hello"], [25], [4==3]]
console.log(x);
console.log(typeof x);

// 2. Function
// it is a callable object that execute block of code
function greeting() {
    console.log("haa bhai");
}
greeting();
console.log(typeof greeting);

// 3. Objects
// It is a complex data type. It allows you to store collection of data
let y = {
    "Name" : "Shikhil" ,
    "age" : 25,
}
console.log(y);
console.log(typeof y);
y["Name"] = "Rane";         // this way we can modify object
y["Year of birth"] = 1996;  // this way we can add add new key
console.log(y);
console.log(y.age);         // this is the way we can access a particular key of an object

// 4. Date
// It is used to how date as well as time
let n = new Date(); // it will retrieve todays date
console.log(n);
console.log(typeof n);
let n1 = new Date("october 12 2023");  //it will retrieve the date we enter
console.log(n1);
// To get day, date, year, month, hours, minutes, seconds, time, =>
let n1_1 = n1.getMonth();
console.log(n1_1);
let n1_2 = n1.getFullYear();
console.log(n1_2);
let n1_3 = n1.getDay();
console.log(n1_3);
let n1_4 = n1.getHours();
console.log(n1_4);
let n1_5 = n1.getDate();
console.log(n1_5);
// we can change the enties like variablename.setMonth(3); , we can even change day, date, year, month, hours, minutes, seconds, time
let n_1_1 = n1.setDate(15);
console.log(n_1_1);