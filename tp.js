let getUrl = "https://jsonplaceholder.typicode.com/posts";

let getXhr = new XMLHttpRequest(); // getXhr is an object in which we can call methods


console.log(getXhr.readyState);
getXhr.open("GET",getUrl);
console.log(getXhr.readyState);

getXhr.onreadystatechange = (() => {
    console.log(getXhr.readyState);
    if(getXhr.readyState===4){
        console.log(getXhr.response);
        let response = getXhr.response;
        let data = JSON.parse(response);
        console.log(data);

        let id = data[3].title;
        console.log(id);
    }
});

getXhr.send();

getXhr.onload = (() => {
    console.log(typeof getXhr.response);
})

let requestUrl = "https://api.github.com/users/shikhilrane";    // url of which api we want
let xhr = new XMLHttpRequest();                                 // Create a new XMLHttpRequest object

xhr.open("GET", requestUrl);                                    // Initialize the request using the GET method and the specified URL
xhr.onreadystatechange = function () {                           // Define the callback function to handle state changes of the request
    console.log(xhr.readyState);
    if (xhr.readyState===4) {
        let gitData = JSON.parse(xhr.response);
        console.log(gitData.starred_url);
    }
}
xhr.send();                                                     // Send the request to the server