// async-await (it is same as .then() and .catch() but it is more efficient way to handle promise. It always return a promise)

// What is async? => It is a keyword that is use before a function to create a async function
// What is await? => It is a keyword that is only used in async function in front of promise to resolve

// Promise handling with async only
let p1 = new Promise((resolve, reject) => {
    resolve("async only");
})

async function getData() {
    return p1;
}
getData()
    .then(res => {
        console.log("fetching data with async only :", res)
    })