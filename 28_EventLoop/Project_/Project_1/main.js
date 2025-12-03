// Start button
let start = document.querySelector("#start");           // Targetted start button

let useToClearingInterval; 

let starting = () => {                                  // made arrow function in which we add setInterval()
    console.log("Started");
    useToClearingInterval = setInterval(() => {         // used setinterval() in targetted start button
        console.log("Running every 2 seconds");         // This statement will get print after every 2000ms
        console.log("Count Increased by 1");
    }, 2000);
}
let eventStarted = start.addEventListener("click", starting);    // added staring arrow function in event listener for start button

// Stop button
let stop = document.querySelector("#stop");             // Targetted stop button
let stopping = () => {                                  // made arrow function in which we add clearInterval()
    clearInterval(useToClearingInterval);               // used setinterval() in targetted start button
    console.log(" Stopped");                            // Once execution stopped it will get printed
}
let eventStopped = stop.addEventListener("click", stopping);    // added stopping arrow function in event listener for stop button