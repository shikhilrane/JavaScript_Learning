// Promise handling with async-await
let p2 = new Promise((resolve, reject) => {
    resolve("Promise handling with async-await");
})
async function fetchGetData1() {
    let val = await p2;     // await can only be used inside an async function (write await in front of promise and it resolve promise)
    console.log("fetchGetData1 :", val)
}
fetchGetData1();