// 4. why we use async-await over .then and .catch
// Execution of .then and .catch
let PromBeforeAsyAW = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise execution with sync code before async-await")
    }, 3000);
})
function fetchGetData3() {
    PromBeforeAsyAW
        .then(res => console.log("with .then.catch :", res))    // this will go to web-api and next sync code will execute (it not doesn't wait)
    console.log("PromBeforeAsyAW executes first")
}
fetchGetData3()

// Execution of async-await
let PromAfterAsyAW = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise execution with sync code after async-await")
    }, 3000);
})
async function fetchGetData4() {
    let val = await PromAfterAsyAW;
    console.log("with async-await", val);  // this will go to web-api and not let sync code to execute before it executes (it will wait)
    console.log("PromBeforeAsyAW executes later")
}
fetchGetData4()

async function fetchGetData41() {
    console.log("Hello world")      // this will executes first

    let val = await PromAfterAsyAW;
    console.log("with async-await", val);  // this will go to web-api and not let sync code to execute before it executes (it will wait)
    console.log("PromBeforeAsyAW executes later")
}
fetchGetData41()

async function fetchGetData42() {
    console.log("Hello world")      // this will executes first

    let val1 = await PromAfterAsyAW;
    console.log("val1 :", val1);  // this will go to web-api and not let sync code to execute before it executes (it will wait)
    console.log("val1 : PromBeforeAsyAW executes later")

    let val2 = await PromAfterAsyAW;
    console.log("val2 :", val2);  // this will go to web-api and not let sync code to execute before it executes (it will wait)
    console.log("val2 : PromBeforeAsyAW executes later")
}
fetchGetData42()    // both val1 and val2 will executes together