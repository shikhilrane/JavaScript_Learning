// Promise with setTimeout function
let properPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("It is resolved")
    }, 2000);
})
async function fetchGetData2() {
    let val = await properPromise;
    console.log(val);
}
fetchGetData2();