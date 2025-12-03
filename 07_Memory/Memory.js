//                                                                   Memory
//                                                              ------------------
//      1. There are 2 types of memory, Stack memory and Heap memory
//      2. Stack memory (stores Primitive data types) = it makes seperate copy for every variable
//      3. Heap memory (stores non-Primitive data type's value) = it refers same value for every variable from heap memory

//  Stack Memory
let myNum = 123;            // Assign value to variable
console.log(myNum);         // Check value of variable

let anotherNum = myNum;     // Assigned value of previously defined variable to new variable
console.log(anotherNum);    // Check value of variable (Value of "myNum" will be assigned to "anotherNum")
anotherNum = 456;           // Assigned another value to new value
console.log(myNum);         // Checked value of previous variable (Value of "myNum" won't be changed)
console.log(anotherNum);    // Checked value of new variable with new value (Value of "anotherNum" will be changed to new)

//  Heap Memory
let myObj = {                   // Made an Object
    "Name" : "Mac",             // Assigned a value
    "Model" : 2019              // Assigned a value
}
console.log(myObj["Name"]);     // took o/p of "Name"

let myNewObj = myObj;           // Assigned value of previously defined Object to new Object
myNewObj["Name"] = "Linux";     // Updated value for "Name"
console.log(myObj["Name"]);     // Checked value of previous Object (Value of "myObj" will be changed)
console.log(myNewObj["Name"]);  // Checked value of new Object with new value (Value of "anotherNum" will be changed to new)