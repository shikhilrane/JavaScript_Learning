// 1. async-await with fetch data from API
async function getAllUsers() {
   try {                                  // Start a try block to handle potential errors in the async operation
      let response = await fetch('https://jsonplaceholder.typicode.com/users');  // Wait for the fetch() request to complete and get the response object from the provided URL
      let data = await response.json()    // used await because response.json() will return promise
      console.log(data);   
   } catch (error) {
      console.error("E : ", error)
   }
}
getAllUsers();

// 2nd by using .then() and .catch() 
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
   return response.json();
})
.then((recievedValue) => {
   console.log(recievedValue)
})
.catch((error) => {
   console.error(error)
});

// 2. Sending an Object with fetch (GET, POST, PUT,PATCH, DELETE)
/*
                                HTTP Methods Overview
                    METHOD	    PURPOSE	            What It Does
                    GET	        Read/Retrieve	      Fetches data from the server
                    POST	      Create	            Sends data to the server to create a new resource
                    PUT	        Update/Replace	    Replaces an entire existing resource
                    PATCH	      Modify/Update	      Updates part of an existing resource
                    DELETE	    Delete	            Removes a resource from the server
*/

// 2.1 GET (Fetches data from the server)
// .then() and .catch()
// Send a GET request to retrieve a list of users
fetch('https://jsonplaceholder.typicode.com/users') // API endpoint for getting users
  .then(response => response.json())                 // Convert the response body to JSON
  .then(data => console.log('GET: ', data))          // Log the data to the console
  .catch(error => console.error('GET Error:', error)); // Log any errors if the request fails

// async/await
// Define an async function to perform a GET request
async function getUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users'); // Fetch user list
    const data = await response.json(); // Parse JSON response
    console.log('GET:', data); // Log retrieved data
  } catch (error) {
    console.error('GET Error:', error); // Log error if fetch fails
  }
}
getUsers(); // Call the function


// 2.2 POST (Sends data to the server to create a new resource)
// .then() and .catch()
// Create a new user object to send to the server
const newUser = {
  name: 'Alice',                      // Name of the user
  email: 'alice@example.com'          // Email of the user
};
// Send a POST request to create a new user
fetch('https://jsonplaceholder.typicode.com/users', { // API endpoint for creating a user
  method: 'POST',                                      // Use POST method to create
  headers: {
    'Content-Type': 'application/json'                 // Set the request content type to JSON
  },
  body: JSON.stringify(newUser)                        // Convert the user object to a JSON string
})
  .then(response => response.json())                   // Parse the response as JSON
  .then(data => console.log('POST: ', data))           // Log the result of the POST request
  .catch(error => console.error('POST Error:', error)); // Handle and log any errors

// async/await
// Define an async function to create a new user
async function createUser() {
  const newUser = {
    name: 'Alice',
    email: 'alice@example.com'
  };
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST', // Use POST to create
      headers: {
        'Content-Type': 'application/json' // Inform server it's JSON
      },
      body: JSON.stringify(newUser) // Convert object to JSON string
    });
    const data = await response.json(); // Parse server's response
    console.log('POST:', data); // Log the created user
  } catch (error) {
    console.error('POST Error:', error); // Handle any network or API error
  }
}
createUser(); // Call the function

// 2.3 PUT (Replaces an entire existing resource)
// .then() and .catch()
// User data to fully replace an existing user (ID: 1)
const updatedUser = {
  name: 'Alice Updated',              // Updated name
  email: 'alice@new.com'              // Updated email
};
// Send a PUT request to update the user with ID 1
fetch('https://jsonplaceholder.typicode.com/users/1', { // API endpoint to update user #1
  method: 'PUT',                                         // Use PUT to replace the resource
  headers: {
    'Content-Type': 'application/json'                   // Specify JSON in request
  },
  body: JSON.stringify(updatedUser)                      // Send updated user object as JSON string
})
  .then(response => response.json())                     // Convert response to JSON
  .then(data => console.log('PUT: ', data))              // Log the updated user object
  .catch(error => console.error('PUT Error:', error));   // Log any error that occurs

// async/await
// Define an async function to replace a user (ID 1)
async function replaceUser() {
  const updatedUser = {
    name: 'Alice Updated',
    email: 'alice@new.com'
  };
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1', {
      method: 'PUT', // Full replacement
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedUser)
    });
    const data = await response.json(); // Parse JSON
    console.log('PUT:', data); // Log updated user
  } catch (error) {
    console.error('PUT Error:', error); // Log errors
  }
}

replaceUser(); // Call the function

// 2.4 PATCH (Updates part of an existing resource)
// .then() and .catch()
// Partial user data to update only one field (email)
const partialUpdate = {
  email: 'alice@patched.com'           // Only update the email
};
// Send a PATCH request to modify the user with ID 1
fetch('https://jsonplaceholder.typicode.com/users/1', { // API endpoint for PATCH
  method: 'PATCH',                                       // Use PATCH to update partially
  headers: {
    'Content-Type': 'application/json'                   // Send JSON formatted data
  },
  body: JSON.stringify(partialUpdate)                    // Convert partial data to JSON string
})
  .then(response => response.json())                     // Parse the server response as JSON
  .then(data => console.log('PATCH: ', data))            // Log the partially updated user
  .catch(error => console.error('PATCH Error:', error)); // Handle any errors that happen

// async/await
// Define an async function to partially update a user
async function updateUserPartially() {
  const partialUpdate = {
    email: 'alice@patched.com'
  };
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1', {
      method: 'PATCH', // Partial update
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(partialUpdate)
    });
    const data = await response.json(); // Parse JSON response
    console.log('PATCH:', data); // Log updated field
  } catch (error) {
    console.error('PATCH Error:', error); // Handle errors
  }
}
updateUserPartially(); // Call the function


// 2.5 DELETE (Removes a resource from the server)
// .then() and .catch()
// Send a DELETE request to remove the user with ID 1
fetch('https://jsonplaceholder.typicode.com/users/1', { // Endpoint to delete user with ID 1
  method: 'DELETE'                                      // Use DELETE method
})
  .then(response => {                                   // Wait for the response
    if (response.ok) {                                  // Check if response is OK (status 200–299)
      console.log('DELETE: User deleted successfully'); // Log success message
    } else {
      console.error('DELETE failed');                   // Log if something went wrong
    }
  })
  .catch(error => console.error('DELETE Error:', error)); // Catch and log any network errors

// async/await
// Define an async function to delete a user
async function deleteUser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1', {
      method: 'DELETE' // Delete resource
    });
    if (response.ok) {
      console.log('DELETE: User deleted successfully'); // Confirm deletion
    } else {
      console.error('DELETE failed'); // Server error
    }
  } catch (error) {
    console.error('DELETE Error:', error); // Network error
  }
}
deleteUser(); // Call the function

/*
   History of Fetch API :
      1. Before Fetch API, developers used the XMLHttpRequest (XHR) interface to make HTTP requests in the browser.
      2. In Internet Explorer 5, we got the support of XMLHttpRequest or XHR Request. 
      3. We were taking data by using XMLHttpRequest.
         While XHR worked, it had several limitations:
            Complex syntax
            Difficult to manage multiple states
            Callback hell in asynchronous flows
      4. To address these issues, Fetch API was introduced as a modern alternative. It provided a cleaner, promise-based syntax for handling HTTP 
         requests and responses.
      5. To overcome these issue Fetch API as a library came in use, It was easily handling async code and fixes all issues of XML difficulties
      6. At that time, Fetch API was seperate library and not integral part of Node JS
      7. Why they didn't integrated Fetch API with Node JS? Because Fetch API was heavily dependent on browser and there is no browser available for  
         Node js so browser API was not available for Node JS. Also there was not a support of 'AbortController' (it means When node request is sent then we can even abort that request, that was available for browser but we can't do that with Node at that time) for Node JS
      8. So Node JS developers wrote their own stream APIs just like browser-based Fetch API
      9. On 1st Feb 2022 Node JS team merged pull request added the Fetch API to Node.
   
   Understanding Fetch API :
      1. what actually fetch is doing? 
         It is a global fetch method that starts a process to fetch a resource on network (so it is a network based process) and returns a promise
      2. If we get error code 404, 404 , etc. from promise request then would it be resolve or reject?
         It will be always resolve because it is actually not an error (it will be error when browser can't make request but in this case it is making request)
      3. How everything inside of Fetch gets completed first before normal setTimeout() and setInteval()?
         Just same as setTimeout() and setInteval(), Fetch API goes in web API because Fetch API is also an async code, but inseasd of going inside of callback queue, it creates its separate queue called microtask queue or priority queue. And priority of that queue will be higher than normal callback queue so it executes first before setTimeout() and setInteval(). 
         scenarios :
            1. setTimeout() and setInteval() = 6 seconds and Fetch API = 6 seconds  ==> Fetch API will executes first
            2. setTimeout() and setInteval() = 8 seconds and Fetch API = 6 seconds  ==> Fetch API will executes first
            3. setTimeout() and setInteval() = 6 seconds and Fetch API = 8 seconds  ==> setTimeout() and setInteval() will executes first.
      4. Internal working of Fetch API : 
                                   |--------->-----response = fetch ('something')
                                   |                            |
                                   ^                            v
                                   |          --------------------------------------
                                   |          |                                    |
                                   |          v                                    v
                                   --<-----Data:-                            web browser/node
                                       onFulfilled[]------<-------|                |
                                       onRejection[]--<--|        |                v
                                                         |        |         network request
                                                         |        |                |
                                                         |        ^                v
                                                         ^        |      ----------------------
                                                         |        |      |                    |
                                                         |        |      v                    v
                                                         |        --<--Resolve              Reject
                                                         ---------<----------------<----------|
                  here,
                     1. there will be two task at a time. Data is a variable that stores space for onFulfilled[] (reject) and for onRejection[] (reject). These are arrays. We are not allowed to push anything inside of these arrays because these are private arrays
                     2. Resource is provided web browser/node sends a network request. If that network request resolved then it will get in onFullfilled[] array and if network request rejected then it will get in onRejection[]. These arrays have function in it and these functions are responsible for fullfilling Data(variable that we created). Then this data will fullfill the memory of response which is available on global memory
               
                     another diagram of fetch API (from chatGPT) : 
                                                         response = fetch('something')
                                                                      |
                                                                      v
                                                        [ Returns a Promise (pending) ]
                                                                      |
                                                                      v
                                                         +---------------------------+
                                                         |  Network Request Starts   |
                                                         +---------------------------+
                                                                      |
                                          +---------------------------+------------------------------+
                                          |                                                          |
                                          v                                                          v
                                 [ Response Received ]                                  [ Network Error / Rejection ]
                                          |                                                          |
                                          v                                                          v
                                  Promise is Resolved                                       Promise is Rejected
                                          |                                                          |
                                          v                                                          v
                                 Callbacks in onFulfilled[]                               Callbacks in onRejection[]
                                          |                                                          |
                                          v                                                          v
                                 .then(response => ...)                                     .catch(error => ...)
*/