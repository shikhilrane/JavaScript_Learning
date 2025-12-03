//                                                            HOISTING


//                                                   1. POSSIBLE HOISTING

//  Function Hoisting
sayMyName("Shikhil");           // here this will execute even before function declaration because during compilation whole function move to top 
                                // of the current scope so that this type of function can be accessible anywhere from the code
function sayMyName(MyName) {
    console.log(MyName);
}
sayMyName("Rane");

// variable hoisting
console.log(a);                 // when we call variable var before its declaration it will give undefined because during compilation var a; would 
                                // be shifted to top of the current scope but not with its value so as a result it will show undefined
var a = 10;

//  NOTE :- Only normal function and with var variable (var will always give undefined in hoisting) hoisting is possible instead of these 2 
//          hoisting can't be possible. e.g. Hoisting can't possible with expression type of function, let, const, class and object, etc.
 

//                                                  2. NOT POSSIBLE HOISTING

// 1. let
console.log(b);
let b = 15;

// 2. const
console.log(c);
const c = 20;

// 3. expression type of function
f1()
var f1 = function () {
    console.log("Expression type of function");
}

// 4. class and object
let object1 = new name();
class name {
    
}

//                                                   3. Temporal Dead Zone

console.log(number);    // <-- from this |
console.log(15);                      // |
console.log(10);                      // | <-------- it is the temporal dead zone
console.log(5);                       // |
let number = 20;        // <-- to this   |
console.log(number);
// TDZ occurs when we call variable with let or const before its declaration and total code between call and declaration becomes TDZ