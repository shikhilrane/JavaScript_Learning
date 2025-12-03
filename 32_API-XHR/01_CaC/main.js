// // How to access data from api
// let obj = {
//   "results": [
//     {
//       "gender": "female",
//       "name": {
//         "title": "Ms",
//         "first": "Alma",
//         "last": "Jørgensen"
//       },
//       "location": {
//         "street": {
//           "number": 5695,
//           "name": "Ribevej"
//         },
//         "city": "Kvistgaard",
//         "state": "Syddanmark",
//         "country": "Denmark",
//         "postcode": 71279,
//         "coordinates": {
//           "latitude": "-46.4021",
//           "longitude": "37.2139"
//         },
//         "timezone": {
//           "offset": "-11:00",
//           "description": "Midway Island, Samoa"
//         }
//       },
//       "email": "alma.jorgensen@example.com",
//       "login": {
//         "uuid": "05c09a6e-aa26-47f3-a75c-3dff0af5c999",
//         "username": "silverelephant866",
//         "password": "freckles",
//         "salt": "NlxE0o4C",
//         "md5": "cabc2755c595510e5593b6abedc7f587",
//         "sha1": "ece46a6586201bbc16ea949e2b7c86e050521b46",
//         "sha256": "9968bc9e924b3288fd48770c4cde826234663a60a2bfb3af1ee83c10aab9725c"
//       },
//       "dob": {
//         "date": "1999-08-10T20:32:59.860Z",
//         "age": 25
//       },
//       "registered": {
//         "date": "2022-01-31T02:37:45.961Z",
//         "age": 3
//       },
//       "phone": "69375650",
//       "cell": "74299371",
//       "id": {
//         "name": "CPR",
//         "value": "100899-4493"
//       },
//       "picture": {
//         "large": "https://randomuser.me/api/portraits/women/4.jpg",
//         "medium": "https://randomuser.me/api/portraits/med/women/4.jpg",
//         "thumbnail": "https://randomuser.me/api/portraits/thumb/women/4.jpg"
//       },
//       "nat": "DK"
//     }
//   ],
//   "info": {
//     "seed": "1643cd7a1e7cbce3",
//     "results": 1,
//     "page": 1,
//     "version": "1.4"
//   }
// }
// console.log(obj.results[0].location.street.number);

// -------------------------------------------------------------------------------------------------------------------------------------------------

// API-XHR
// Before the Fetch API, HTTP requests in JavaScript were made using XMLHttpRequest.
// It was commonly used in AJAX programming (Asynchronous JavaScript and XML).
// However, it's not widely used in modern development due to the introduction of newer and cleaner alternatives like Fetch and Axios.

/*
    HTTP methods:

    1. GET - to get data
    2. POST - to create data
    3. PUT - update the data
    4. DELETE - remove the data
    5. PATCH - to update some data, not full data
*/

/*
    XMLHttpRequest.readyState values:

    Value   State              Description
    -----------------------------------------------------------
     0      UNSENT             The request has been created, but open() hasn't been called yet.
     1      OPENED             open() has been called. The request is ready to be configured.
     2      HEADERS_RECEIVED   send() has been called. Response headers and status are available.
     3      LOADING            The response is being downloaded. responseText holds partial data.
     4      DONE               The operation is complete. Full response is available.
*/


let requestUrl = "https://api.github.com/users/shikhilrane";    // url of which api we want
let xhr = new XMLHttpRequest();                                 // Create a new XMLHttpRequest object
console.log(xhr.readyState);                                    // Log the current readyState (should be 0 - UNSENT)
xhr.open("GET", requestUrl);                                    // Initialize the request using the GET method and the specified URL
console.log(xhr.readyState);                                    // Log the readyState after opening the connection (should be 1 - OPENED)
xhr.onreadystatechange = function() {                           // Define the callback function to handle state changes of the request
    console.log(xhr.readyState);                                // Log the current readyState every time it changes
    if (xhr.readyState===4) {                                   // Check if the request has completed (readyState 4 = DONE)
        let data = JSON.parse(this.responseText);               // Parse the JSON response text into a JavaScript object
        console.log(data);                                      // Log the full parsed object to inspect its structure
        console.log(typeof data);                               // Log the data type of the parsed response (should be "object")
        console.log(data.followers);                            // Log the number of followers from the GitHub user data
        console.log(data.avatar_url);                           // Log the avatar URL of the GitHub user
    }
}
xhr.send();                                                     // Send the request to the server