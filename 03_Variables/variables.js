 //                                                        Variables
 //                                         ------------------------------------------

 /*
      a. Variables are used to store data
      b. there are generally 3 types of variables in JS
      c. Variables should start with letters, _ or $ but not with numbers
      d. variables are case sensitive means 'a' and 'A' are different
      e. variable name can't contain spaces
      f. variable name can only contain letters, digits, underscore(_) & dollar($)
      g. reserved keywords can't be used as variable name
      h. there are three types of variables
         1. var
         2. let 
         3. const
 */

var v = 12;
console.log(v);
var v = 14;
console.log(v);

let l = 15;
console.log(l);
l = 16;
console.log(l);

const c = 19;
console.log(c);



//       1. var
/* 
      this variable was in use before es6 is introduced
      we can declare & assign a value to var variable again and again
*/
    var         a           =         7;
//   ^          ^           ^         ^
//variable, identifier, assign op, literal;
console.log("value of a = " + a);
var a = 8;
console.log("Changed value is " + a);


//      2. let
/* 
      we can assign value again and again but we can't declare let variable with same name again and again
*/
let b = 8;
console.log("value of b = " + b);
b = 9;
console.log("Changed value is " + b);


//      3. Constant
/* 
      standard constant value should assign to constant variable
      we neither can assign nor declare consta variable again and again 
*/
const PI = 3.14;
console.log("value of PI = " + PI);