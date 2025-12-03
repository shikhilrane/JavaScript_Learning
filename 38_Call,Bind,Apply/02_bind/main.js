// Define a class called React
class React {
    // Constructor runs automatically when a new object is created
    constructor() {
        // Set some properties on the instance
        this.library = "React";                                     // Name of the library
        this.server = "https://localhost:3000";                     // Server URL (fixed colon)

        // Add a click event listener to the first <button> on the page
        // .bind(this) ensures that 'this' inside handleClick refers to the class instance
        document
            .querySelector("button") // Selects the first button element
            .addEventListener("click", this.handleClick.bind(this)); // Binds and adds event
    }

    // This method runs when the button is clicked
    handleClick() {
        console.log("Button click");        // Logs simple message
        console.log(this);                  // Logs the current class instance
        console.log(this.library);          // Logs the library from the instance
        console.log(this.server);           // Logs the server URL from the instance
    }
}

// Create a new instance of the React class
let app = new React(); // This will set everything up when the page loads