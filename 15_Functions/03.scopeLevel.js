//                                                          Scope level
//                                  1. scope level is also called nested scope
//                                  2. we can access outer scope in inner scoper but cant access inner scope statement in outer scope
//                                  3. we will see nested scope for conditionals, loops and functions

// a. scope level or nested scope for conditionals
if (true) {
    let lFirst = "Java";
    if (true) {
        let lLast = "Script";
        console.log(lFirst + lLast);    // we can access outer scope in inner scoper
    }
    // console.log(lLast);              // cant access inner scope statement in outer scope
}

// b. scope level or nested scope for loops
for (let i = 1; i <= 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(i);                 // we can access outer scope in inner scoper
    }
    // console.log(j);                  // cant access inner scope statement in outer scope
}

// c. scope level or nested scope for function
function funcOuter() { 
    let fName = "Shikhil ";
    function funcInner() {
        let lName = "Rane";
        console.log(fName + lName);  // we can access outer scope in inner scoper
    }
    // console.log(lName);          // cant access inner scope statement in outer scope
    funcInner();
}
funcOuter();