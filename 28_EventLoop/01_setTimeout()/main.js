// Ways to declare setTimeout
// 1. Normal function
function first() {
    console.log("First");
}
setTimeout(first,1000)  // first = Timer-Handler and 1000 = timeout

// 2. Expression type of function
let second = function () {
    console.log("Second");
}
setTimeout(second,2000)

// 3. Arrow function
let third = () => {
    console.log("Third");
}
setTimeout(third,3000);

// 4. Function inside setTimeout
setTimeout(function fourth() {
    console.log("Fourth");
},4000)

// 5. setTimeout arrow function
setTimeout(() => {
    console.log("Fifth");
},5000);

// With HTML
// 1. setTimeout():
let changeText = () => {
    document.querySelector("#heading").textContent = "Internal content changed";
}
setTimeout(changeText, 6000);   // setTimeout will change the text after 6 seconds

// 2. cancelTimeout() :
function changeTxt() {
    document.querySelector("#cancel").textContent = "Changed after 8 seconds";
}
let timerId = setTimeout(changeTxt, 7000);  // Start the timeout
function cancelTimeout() {                  // Function to cancel the timeout
    clearTimeout(timerId);                  // clearTimeout() function to clear
    alert("Timeout canceled!");
}


// 3. another example with dedicated start stop button
let startt = document.getElementById("startt");
let stopp = document.getElementById("stopp");

let startId;

startt.addEventListener("click", function handleStart() {
    console.log("clicked");
    startId = setTimeout(() => {
        console.log("hello");
    }, 4000);
})


stopp.addEventListener("click", function cancelTimeout() {
    clearTimeout(startId)
    console.log("stopped")
})