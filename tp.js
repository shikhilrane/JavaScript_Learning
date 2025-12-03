// before async-await how do we used to handle promises.
let p = new Promise((resolve, reject) => {
        resolve("Promise handling before async-await");
})
p.then(res => console.log(res))
                //      OR (in function) 
function fetchGetData() {
        p.then(res => console.log("fetchGetData :", res))
}
fetchGetData();


// async-await (use to handle promise)
// 1. Promise handling with async only
let p1 = new Promise((resolve,reject) => {
        resolve("async only");
})

async function getData() {
        return p1;
}
getData()
.then(res => {
        console.log("fetching data with async only :",res)
})

// 2. Promise handling with async-await
let p2 = new Promise((resolve, reject) => {
        resolve("Promise handling with async-await");
})
async function fetchGetData1() {
        let val = await p2;     // await can only be used inside an async function (write await in front of promise and it resolve promise)
        console.log("fetchGetData1 :", val)
}
fetchGetData1();

// 3. Promise with setTimeout function
let properPromise = new Promise((resolve,reject) => {
        setTimeout(() => {
               resolve("It is resolved") 
        }, 2000);
})
async function fetchGetData2() {
        let val = await properPromise;
        console.log(val);
}
fetchGetData2();

// 4. why we use async-await over .then and .catch
// Execution of .then and .catch
let PromBeforeAsyAW = new Promise((resolve,reject) => {
        setTimeout(() => {
                resolve("Promise execution with sync code before async-await")
        }, 3000);
})
function fetchGetData3() {
        PromBeforeAsyAW
                .then(res => console.log("with .then.catch :", res))    // this will go to web-api and sync code will execute (it not doesn't wait)
        console.log("PromBeforeAsyAW executes first")
}
fetchGetData3()

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
fetchGetData42()


// Scenario
let prom1 = new Promise((resolve,reject) => {
        setTimeout(() => {
                resolve("Promise 1")
        }, 10000);
})
let prom2 = new Promise((resolve,reject) => {
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
exeProms();

let prom3 = new Promise((resolve,reject) => {
        setTimeout(() => {
                resolve("Promise 3")
        }, 5000);
})
let prom4 = new Promise((resolve,reject) => {
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
exePromsRev();






// fetch


let api_url = "https://api.github.com/users/shikhilrane";

async function handleApiUrl() {
        try {
                let data = await fetch(api_url);        // fetch api returns a promise so we used await there
                let jsonData = await data.json();       // Convted data into .json() and .json() will also returns a promise so we use await here (std procedure)
                console.log(jsonData);
                console.log(jsonData.twitter_username);
                console.log(jsonData.avatar_url);
        } catch (error) {
                console.error(error)
        }
}
handleApiUrl()

//      OR

fetch("https://api.github.com/users/shikhilrane")
.then(res => res.json())
.then(res => {
        console.log(res) 
        console.log(res.avatar_url)
});