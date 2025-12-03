// ES6 Rest (Combining) & Spread (Seperating) Operator

// 1. Rest And Spread Operator on Arrays
// 1.1 Rest Operator on Array
function addNumbers(a,b,c,...val) {     // First 3 numbers will be stored in a,b,c and rest of all will saved in val
    console.log(val);                   // ES6 method of rest (Returns an Array)
    console.log(val[3]);
    console.log(arguments);             // ES5 method to pass multiple arguments (Returns an Object)
    return a+b+c;
}
let result = addNumbers(3,4,5,8,9,11,14);
console.log(result);

// 1.2 Spread Operator on Array
let names = ["Pune", "Mumbai", "Nashik", "Nagpur"];
function getNames(name1, name2, name3, name4) {
    console.log(name1, name2, name3, name4);
}
getNames(names[0], names[1], names[2], names[3]);   // Old way to push multiple arguments
getNames(...names);                     // ES6 Spread (MOST RECOMMENDED)
getNames(names);                        // Another way (NOT RECOMMENDED)

// 2. Rest And Spread Operator on Objects
// 2.1 Rest Operator on Objects
let students = {
    name : "ABC",
    age : 29,
    hobbies : ["Football", "F1"],
    country : "India"
}

let {...other} = students;     // Rest using Object Destructuring
console.log(other);

// 2.2 Spread Operator on Objects
let newStudents = {
    ...students,              // Got the students object in new object using spread operator
    name : "XYZ"              // We can update newStudents's properties
}
console.log(newStudents)