//                                                         Scope
//                           there are 3 types scopes : 1. Global Scope, 2. functional scope, 3. Block Scope

//                                                    1. Global Scope
var a = 10; // global variable

// global variable executing in global scope
console.log("Normal, ", a);

// global variable executing in block scope
{
    console.log("Block, ", a);
}

// global variable executing in conditional
if (true) {
    console.log("Conditional, ", a);
}

// global variable executing in loop
for (let i = 0; i < 2; i++) {
    console.log("Loop, ", a);
}

// global variable executing in function
function sayHello() {
    console.log("Function, ", a);
}
sayHello();

// NOTE :- Even if we use let or const in global scope the result would be the same as of var



//                                                  2. function Scope
function sayMyName() {
    var initial = "Mr."
    console.log(initial, "Shikhil");
}
sayMyName();
// console.log(initial);    variable not accessible from function scope

// NOTE :- Even if we use let or const in functional scope the result would be the same as of var



//                                                   3. Block Scope
//  1.  var (var can be accessible outside the block scope)
console.log(b); // here hoisting will happen as it calling before declaration so o/p will be undefined
{
    var b = 100;
}
console.log(b);

//  2. let  (let can't be accessible outside the block scope)
{
    let c = 200;
}
// console.log(c);

//  3. const  (const can't be accessible outside the block scope)
{
    const d = 300;
}
// console.log(d);

/*
    1. global scope - all three variable made in global scope can be accessible everywhere
    2. function scope - all three variable made in function scope can't be accessible outside function scope
    3. block scope - var made in block scope can be accessible outside block scope &, let and const made in block scope can't be accessible outside block scope
 */