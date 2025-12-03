//                                                            Promise
/*  
  1. Promise is an object which handle the resulting value or completion state of a Asynchronous code
  2. Jab ek Asynchronous code koi ek value return kar rha he, kya uski state he, ya kya wo reject ho gya, ya fir successful state he, ya fir pending state he. To uski state ko check karna aur uski returning value ko effective way me handle karna hi Promise he.
  3. There are 3 states of a Promise - 
        1. Pending(initial state neither rejected nor accepted), 
        2. fullfilled (opertation completed successfully), 
        3. rejected (operation failed)
  example : If i have coffee, chips, vegetables, salt, rice in my cart & i promise you to make fried rice for you 
            1. and the process of making fried rice, status = promise pending
            2. if the fried rice made successfully, status = promise fulfilled (Message : Fried rice made successfully)
            3. if i failed to make the fried rice, status = promise reject (Message : Sorry! failed to make fried rice)
  4. As we know, Asynchronous code doesn't return value immediately but if we want to return value immediately then Promise do that thing but instead of returning value immediately it returns promise, the promise to supply the value at some point in the future (Matlab abhi mujhse promise lelo aur jab aapko value ki jarurat padegi tab value return kar dunga)
  5. Writing a Asynchronous code inside Promise is a good practice to follow
  6. Promises always executes in microtask queue in memory (having higher preference than callback queue)
  7. Promise >> Callback Hell
*/

// 1. Promise() with Synchronous code
let firstPromise = new Promise((resolve, reject) => {
    console.log("This is Promise with Synchronous code");
                                                // 1. If we didnt mark anything then it will show pending
    // resolve(1);                              // 2. It shows promise fullfilled
    // reject(new Error("Internal error"));     // 3. It shows promise rejected (thrown a custom error)
});
// Note : to check state of promise type promise name in browser console but there's no point of using promise for synchronous code because synchronous code will run sequentially without any break. So. just use Promise for Asynchronous code

// 2. Promise() with Asynchronous code
let secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("This is Promise with Asynchronous code");
        let a = false;
        if (a == true) {
            resolve("Line executed");
        }
        else {
            reject(new Error("Its not true"))
        }
    }, 5000);
});

secondPromise
    .then((val) => {
        console.log(val);
    })
    .catch((err) => {
        console.error(err);
    })

// 3. Promise() with .then() and .catch() (if promise fullfilled then .then() will be execute and if rejected then .catch() will be execute)
let thirdPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true;
        if (success) {
            resolve("Promise fullfilled");
        }
        else{
            reject("Promise rejected");
        }
    }, 2000);
});
thirdPromise.then((message) => {                    // we need to pass function inside of then and catch
    console.log("Promise accepted : " + message);   // if true then this will execute (message will refer to statement inside of resolve)
}).catch((error) => {
    console.error("Promise rejected : " + error);     // if fasle then this will execute (error will refer to statement inside of rejected)
}).finally(() => {
    console.log("This will run in any and how case");
})

// 4. Promise with input as array
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


// 5. Promise with input as array with functions
function ricePromise() {
    const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];
    return new Promise((resolve, reject) => {
        if ((bucket.includes("vegetables")) && (bucket.includes("salt")) && (bucket.includes("rice"))) {
            resolve({ value: "Fried Rice in object" }); 
        } else {
            reject("Could't do it");
        }
    })
}
ricePromise()
    .then((myFriedRice) => {
        console.log("lets eat", myFriedRice)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log("You got the result of the promise");
    })

// 6. Promise with input as array with functions and with setTimeout
// Create a promise
function friedRiceMaking() {
    const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];
    return new Promise((resolve, reject) => {
        console.log("I promised you to make fried rice, let's see if i can make...")
        setTimeout(() => {
            if ((bucket.includes("vegetables")) && (bucket.includes("salt")) && (bucket.includes("rice"))) {
                resolve({ value: "Fried Rice in object" }); // we can give anything as resolve object, array, string, success value coming from API
            } else {
                reject("Could't do it");    // we can give anything as resolve object, array, string, failure value coming from API
            }
        }, 3000);
    });
}
friedRiceMaking()
    .then((res) => {
        console.log("Success, Loading...");
        console.log(res);
    })
    .catch((err) => {
        console.error(err);
    })
    .finally(() => {
        console.log("You got the result of the promise");
    })

// 7. Promise with setTimeout 
function myPromise() {
    return new Promise((resolve, reject) => {
        let value = false;
        setTimeout(() => {
            if (value) {
                resolve(value);
            } else {
                reject(value);
            }
        }, 2000);
    })
}
myPromise()
    .then((val) => {
        console.log(val);
    })
    .catch((error) => {
        console.error(error);
    })

// 8. Chaining Promise (using multiple .then() and multiple .catch())
let fourthPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true;
        if (success) {
            resolve("Promise fullfilled");
        }
        else{
            reject("Promise rejected");
        }
    }, 2000);
});
fourthPromise.then((message) => {
    console.log("Message 1 : " + message)
    return "New fullfill from 1st .then()";
}).then((message) => {
    console.log("Message 2 : " + message)       // here message will refer to the return from its previous .then()
    return "New fullfill from 2nd .then()";
}).then((message) => {
    console.log("Message 3 : " + message)
}).catch((error) => {
    console.error("Message 1 : " + error);
    throw "New error from 1st .catch()";        // Throwing new error to trigger second catch
}).catch((error) => {
    console.error("Promise rejected " + error);   // here error will refer to the throw from its previous .catch()
});

// 9. Chaining with function 
function exeCb(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('data', data);
            let success = false;
            if (success) {
                resolve("Success")
            }
            else {
                reject(new Error("Unsuccessful"));
            }
        }, 2000);
    })
}
exeCb(3.8)
    .then(() => {
        console.log("Getting data 1...");
        return exeCb(4)
    })
    .then(() => {
        console.log("Getting data 2...");
        return exeCb(5)
    })
    .then((val) => {
        console.log(val);
    })
    .catch((err) => {
        console.error(err)
    })

// 10. Chaining with function with Promise chaining
function newPromise(pmn) {
    return new Promise((resolve, reject) => {
        console.log(pmn);
        setTimeout(() => {
            let success = false;
            if (success) {
                resolve("Promise fullfilled");
            }
            else {
                reject("Promise rejected");
            }
        }, 2000);
    });
}

console.log("Message 1 loading...");
newPromise(1)
    .then(() => {
        console.log("Message 2 loading...")
        return newPromise(2);
    })
    .then(() => {
        console.log("Message 3 loading...")       // here message will refer to the return from its previous .then()
        return newPromise(3);
    })
    .then((message) => {
        console.log("Promise status :", message)
    })
    .catch(() => {
        console.log("Error detected...");
        throw "New error from 1st .catch()";        // Throwing new error to trigger second catch
    })
    .catch((error) => {
        console.error("Promise rejected " + error);   // here error will refer to the throw from its previous .catch()
    });

// 11. Promise.all() (it create new promise that will execute (resolve) when all promises inside it gets resolved & if any promise gets rejected then it will be considered as rejected).
let promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve,2000,"First");
});
let promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve,5000,"Second");
});
let promise3 = new Promise((resolve, reject) => {
    setTimeout(reject,8000,"Third");
});

Promise.all([promise1, promise2, promise3])         // execution depend on order we pass the promise in array
.then((value) => {
    console.log(value);
}).catch((error) => {                               // if we mark any promise as reject then this will execute (as we did in promise3)
    console.error(error);
})

// 12. Promise.race() (it create new promise in which the fastet promise amongst all promises will resolve or reject first)
let promiseA = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "A is done");
});
let promiseB = new Promise((resolve, reject) => {       // this promise need 1 second to resolve (fastest) so this will get executed
    setTimeout(resolve, 1000, "B is done");
});
let promiseC = new Promise((resolve, reject) => {
    setTimeout(reject, 2000, "C failed");
});

Promise.race([promiseA, promiseB, promiseC])            // execution doesn't depend on order we pass the promise in array
.then(result => {
    console.log("Race winner (resolved):", result);         // if resolve is faster then this will be executed
})
.catch(error => {
    console.error("Race failed (first rejected):", error);  // if reject is faster then this will be executed
});

// 13. Promise.any() (it create new promise in which it the only fastest resolved promise will get executed)
let promiseW = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, "W succeeded");
});
let promiseX = new Promise((resolve, reject) => {
    setTimeout(reject, 1000, "X failed");
});
let promiseY = new Promise((resolve, reject) => {
    setTimeout(reject, 2000, "Y failed");
});
let promiseZ = new Promise((resolve, reject) => {       // this promise resolve fastest, so this will get executed
    setTimeout(resolve, 3000, "Z succeeded");
});

Promise.any([promiseW, promiseX, promiseY, promiseZ])
.then(result => {
    console.log("Any resolved:", result);
})
.catch(error => {
    console.error("All promises failed:", error);
});









// Promise to resolve callback hell as we saw earlier in callback hell
let heading1 = document.querySelector(".heading1");
let heading2 = document.querySelector(".heading2");
let heading3 = document.querySelector(".heading3");
let heading4 = document.querySelector(".heading4");
let heading5 = document.querySelector(".heading5");
let heading6 = document.querySelector(".heading6");
let heading7 = document.querySelector(".heading7");
let heading8 = document.querySelector(".heading8");
let heading9 = document.querySelector(".heading9");
let heading10 = document.querySelector(".heading10");

function changeText(element, text, color, time) {
    return new Promise((resolve, reject) => {
        if (element) {
            setTimeout(() => {
                element.textContent = text;
                element.style.color = color;
                resolve("Promise Resolved");
            }, time);
        } else {
            reject("Promise Rejected")
        }
    })
}

let returnPromise = changeText(heading1, "one", "red", 1000) // change text function will get arguments and stored in returnPromise
returnPromise
    .then((val) => {                   // applied then() on returnPromise to receive value in it
        console.log(val);
        return changeText(heading2, "two", "purple", 2000)  // return this to next then
    })
    .then(() => {
        return changeText(heading3, "three", "violet", 2000)
    })
    .then(() => {
        return changeText(heading4, "four", "pink", 1000)
    })
    .then(() => {
        return changeText(heading5, "five", "green", 2000)
    })
    .then(() => {
        return changeText(heading6, "six", "blue", 1000)
    })
    .then(() => {
        return changeText(heading7, "seven", "brown", 2000)
    })
    .then(() => {
        return changeText(heading8, "eight", "aqua", 2000)
    })
    .then(() => {
        return changeText(heading9, "nine", "yellow", 3000)
    })
    .then(() => {
        return changeText(heading10, "ten", "gray", 1000)
    })
    .catch((error) => {
        console.log(error)  // If we miss anything in argument in .then() then it will print error message
    })



// Program from callback hell to solve by using promise
function exeCb(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('data', data);
            if (data >= 0) {
                resolve(data, "+ next function");
            }
            else {
                reject(new Error("Rejected"))
            }
        }, 2000);
    })
}

console.log("Loading 1...")
exeCb(1)
    .then(() => {
        console.log("Loading 2...");
        return exeCb(2)
    })
    .then(() => {
        console.log("Loading 3...");
        return exeCb(3)
    })
    .then((res) => {
        console.log("Successful", res);
    })
    .catch((err) => {
        console.error(err);

    });