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