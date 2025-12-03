// Background Color changing Project
let randomColor = function () {
    let hex = "0123456789ABCDEF";   // All possible hexadecimal digits
    let color = "#";                // Start of the hex color code
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];   // Append a random hex digit 6 times to complete the color code
    }
    return color;                   // Return the full color string (e.g., "#A3F7D2")
}
console.log(randomColor());         // Log a random color to the console (for testing)

let intervalId;                     // Variable to store interval ID so it can be cleared later

let startChangingColor = function(){    // Function to start changing background color every second
    function changeBgColor() {          // Inner function that changes the background color to a random color
        document.body.style.backgroundColor = randomColor();
    };
    if (!intervalId) {                  // Only start the interval if it's not already running
        intervalId = setInterval(changeBgColor, 1000);
    }
    console.log("Started");             // Log status to console
};
let start = document.querySelector("#start");   // Get reference to the "Start" button by its ID
start.addEventListener("click", startChangingColor);    // Add click event listener to start button

let stopChangingColor = function(){     // Function to stop changing background color
    clearInterval(intervalId);          // Stop the interval
    intervalId = null;                  // Reset the intervalId so it can be restarted later
    console.log("Stopped");             // Log status to console
};
let stop = document.querySelector("#stop");         // Get reference to the "Stop" button by its ID
stop.addEventListener("click", stopChangingColor);  // Add click event listener to stop button