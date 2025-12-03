// Get the element with ID 'insert' where key information will be displayed
let insert = document.getElementById("insert");

// Add an event listener to the window object for any key press
window.addEventListener("keydown", (e) => {
    // Update the innerHTML of the 'insert' element with a table showing key info
    insert.innerHTML = `
        <div class='color'>
            <table>
                <tr>
                  <th>Key</th>        <!-- Header for the key character -->
                  <th>keyCode</th>    <!-- Header for the key's numeric code -->
                  <th>code</th>       <!-- Header for the physical key on the keyboard -->
                </tr>
                <tr>
                  <!-- Display the actual key pressed, or "Space" if it was the spacebar -->
                  <td>${e.key === " " ? "Space" : e.key}</td>
                  
                  <!-- Display the deprecated but still widely used keyCode (numeric value of the key) -->
                  <td>${e.keyCode}</td>
                  
                  <!-- Display the code representing the physical key on the keyboard -->
                  <td>${e.code}</td>
                </tr>
            </table>
        </div>
    `;
});
