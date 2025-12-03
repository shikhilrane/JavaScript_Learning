// setInterval() : This method is used to repeatedly execute a function after a specified time interval
// 1. Normal setInterval() with clearInterval()
let sayName = () => {                               // Arrow function in which we are printing something
    console.log("Shikhil");
};
let intervalID = setInterval(sayName, 2000);        // set Interval() in which we passed (function reference and time interval)

setTimeout(() => {                                  // setTimeout() method to stop execution of setInterval() method
    clearInterval(intervalID);                      // clearInterval() to stop execution of code after specified time
    console.log("Interval stopped");                // this will get executed when clearInterval() executes
}, 6000);                                           // clearInterval() will executes after 6000ms

// 2. setInterval() with clearInterval() with third parameter
let country = (urCountry) => {                      // Arrow fucntion in which we are printing something with parameter passed
    console.log(urCountry);
}
let getCountry = setInterval(country, 2500, "India")// set Interval() in which we passed (function reference & time interval & argument to parameter)
setTimeout(() => {                                  // setTimeout() method to stop execution of setInterval() method
    clearInterval(getCountry);                      // clearInterval() to stop execution of code after specified time
    console.log("Interval stopped");                // this will get executed when clearInterval() executes
}, 10000);                                          // clearInterval() will executes after 10000ms

// 3. Another Example -> setInterval() in which we want to execute setInterval() for specified period of time using setTimeout()
let company = () => {                               // Arrow function in which we are printing something
    console.log("Samsung");
}
let getCompany = setInterval(company, 3000);        // set Interval() in which we passed (function reference and time interval)
setTimeout(() => {                                  // setTimeout() method to stop execution of setInterval() method
    clearInterval(getCompany);                      // clearInterval() to stop execution of code after specified time
    console.log("Execution stopped");               // this will get executed when clearInterval() executes
}, 12000);                                          // clearInterval() will executes after 12000ms


// 4. setInterval() with start and stop button

let start = document.getElementById("start");   // Targetted start button
let intervalId;                                 // Declare a variable to store the interval ID returned by setInterval

function startCount() {                         // Define the function to start the counting process
    // Start a repeating interval that runs every 3000 milliseconds (3 seconds)
    // The returned interval ID is saved in 'intervalId' so it can be cleared later
    intervalId = setInterval(() => {
        console.log("printing");                // Print "printing" to the console
        console.log("Press 'stop' to exit");    // Print a message prompting the user to press 'stop' to exit
    }, 3000);
}
start.addEventListener("click", startCount);    // Add a click event listener to the 'start' button that triggers 'startCount' function

let stop = document.getElementById("stop");     // Targetted stop button
stop.addEventListener("click", () => {          // Add a click event listener to the 'stop' button that clears the interval and stops the printing
    clearInterval(intervalId);                  // Clear the interval using the saved 'intervalId' to stop repeated execution
    console.log("Stopped");                     // Log a message indicating that the interval has been stopped
});