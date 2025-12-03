// async-await execution flow
// 1. execution in of async-await from higher time to lower time
let prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1")
    }, 10000);
})
let prom2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2")
    }, 5000);
})
async function exeProms() {
    let val1 = await prom1;
    console.log(val1);
    console.log("Promise 1 executed");

    let val2 = await prom2;
    console.log(val2);
    console.log("Promise 2 executed");
}
exeProms(); // val1 and val2 both will executes together with eah other after 10seconds

// 2. execution in of async-await from lower time to higher time
let prom3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 3")
    }, 5000);
})
let prom4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 4")
    }, 10000);
})
async function exePromsRev() {
    let val3 = await prom3;
    console.log(val3);
    console.log("Promise 3 executed");

    let val4 = await prom4;
    console.log(val4);
    console.log("Promise 4 executed");
}
exePromsRev(); // val3 will executes first in 5 seconds and then val4 will executes after 10 seconds