//                                                      truthy and falsy
//                      1. this is way to execute statement
//                      2. difference between true and truthy :- If the value isn't literally "true" but evaluates as true, we call it "truthy."
//                      3. empty array,object,function is truthy whereas empty string is falsy

let loggedIn = "allowed to log in";         // <= this is truthy value 
if (loggedIn) {
    console.log("you are logged in");
}else{
    console.log("not allowed to log in");
}

let loggedOut = "";                         // <= this is falsy value 
if (loggedOut) {
    console.log("you are logged out");
}else{
    console.log("you are not logged out");
}

/* falsy values (all) => 
    1. "" (empty string)
    2. 0
    3. -0
    4. BigInt 0n
    5. false
    6. null
    7. undefined
    8. NaN
*/

/* truthy value (some) =>
    1. "0" (zero in string)
    2. " " (space in string, anything under string is truthy)
    3. []
    4. {}
    5. function(){}
    6. true
*/


//examples
let array = []
if (array.length===0) {
    console.log("array is empty");
}

let obj = {};
if (Object.keys(obj).length===0) {
    console.log("object is empty");
}


//+++++++++++++++++++++++++++++++++++++++ Null Coalescing operator (??), (null,undefined) +++++++++++++++++++++++++++++++++++++++
// it is used to avoid null and undefined values
// when we get data from data base & if data come with null or undefined ,then to avoid further operations getting interrupt, we asssign them some values

let val1;

val1 = 5 ?? 10;
console.log(val1);

val1 = null ?? 10;
console.log(val1);

val1 = undefined ?? 15;
console.log(val1);

val1 = null ?? undefined ?? 15 ?? 20
console.log(val1);

// *NOTE* :- it actually assign first hard value 