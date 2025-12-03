// Execution of Synchronous, setTimeout and Promise code

// 1. Promise code : 
const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];

// Create a promise
const friedRicePromise = new Promise((resolve, reject) => {
    if ((bucket.includes("vegetables")) && (bucket.includes("salt")) && (bucket.includes("rice"))) {
        resolve({ value: "Fried Rice in object" }); // we can give anything as resolve object, array, string, success value coming from API
    } else {
        reject("Could't do it");    // we can give anything as resolve object, array, string, failure value coming from API
    }
});

// Consume the promise
friedRicePromise
    .then((myFriedRice) => {
        console.log("lets eat", myFriedRice)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log("You got the result of the promise");
    })

// 2. setTimeout function : 
setTimeout(() => {
    console.log("setTimeout function");
}, 0);

// 3. Synchronous Code : 
for (let i = 0; i < 10; i++) {
    console.log(Math.random(), i)
}


/*
    Execution of Synchronous, setTimeout and Promise code
    1st - Synchromous code will execute first
    2nd - Promise code will execute then
    3rd - setTimeout will execute later

    In callstack first GEC will take place in callstack.
    1. const bucket will enter in GEC
    2. const friedRicePromise will be in call stack and as it will be a Promise fucntion it will go in web api section
    3. setTimeout will come in callstack and go in web api section
    4. setTimeout will go in callback queue and Promise will go in microtask queue
    5. Event loop will execute microtask queue first then it will execute setTimeout will execute later
*/