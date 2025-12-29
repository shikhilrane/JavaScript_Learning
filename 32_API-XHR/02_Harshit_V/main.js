let getUrl = "https://jsonplaceholder.typicode.com/posts";

let getXhr = new XMLHttpRequest(); // getXhr is an object in which we can call methods

// 1. Basic properties of XMLHttpRequest() Object : 
console.log(getXhr);               // It will log getXhr object on log
console.log(getXhr.status);        // It will log HTTP status code of the response (1XX, 2XX, 3XX, 4XX, 5XX)
console.log(getXhr.readyState);    // It will log readyState (0,1,2,3,4)
console.log(getXhr.response);      // It will log data returned from the server after a request is completed (generally its a string)
getXhr.responseType = "json";      // Setting the expected response format (should be lowercase: "json")
console.log(getXhr.responseType);  // It will log the current responseType ("json" if set)
console.log(getXhr.onerror);

// 1. GET Request
console.log(getXhr.readyState);
getXhr.open("get", getUrl);
console.log(getXhr.readyState);
getXhr.onreadystatechange = () => {    // This function will be call when readyState changes everytime
    // console.log(getXhr);
    // console.log(getXhr.readyState);
    if (getXhr.readyState === 4) {
        console.log("GET Response:", getXhr.response);
        console.log(typeof (getXhr.response)); //we getting object because we converted this to json already
        // Accessing id of specific element
        let xhr2 = new XMLHttpRequest();
        let id = getXhr.response[3].id;
        let url2 = `${getUrl}/${id}`;
        xhr2.response = "json"
        console.log(url2);
        xhr2.open("get", url2);
        xhr2.onreadystatechange = () => {
            console.log("GET Response for xhr2:", xhr2.response);
            console.log(typeof (xhr2.response));
        }
        xhr2.send();
    }
};

getXhr.onerror = () => {
    console.error("GET Error");
};

getXhr.send();

// 2. POST Request
let postUrl = "https://jsonplaceholder.typicode.com/posts";
let postXhr = new XMLHttpRequest();

postXhr.open("POST", postUrl);
postXhr.setRequestHeader("Content-Type", "application/json");

postXhr.onreadystatechange = () => {
    if (postXhr.readyState === 4) {
        let data = JSON.parse(postXhr.response);
        console.log("POST Response:", data);
        console.log(typeof (data));
    }
};

postXhr.onerror = () => {
    console.error("Network Error");
};

let postData = JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1
});

postXhr.send(postData);

// 3. PUT Request
let putUrl = "https://jsonplaceholder.typicode.com/posts/1"; // update post with ID 1
let putXhr = new XMLHttpRequest();

putXhr.open("PUT", putUrl);
putXhr.setRequestHeader("Content-Type", "application/json");

putXhr.onreadystatechange = () => {
    if (putXhr.readyState === 4) {
        let data = JSON.parse(putXhr.response);
        console.log("PUT Response:", data);
        console.log(typeof (data));
    }
};

putXhr.onerror = () => {
    console.error("PUT Error");
};

let putData = JSON.stringify({
    id: 1,
    title: "updated title",
    body: "updated body",
    userId: 1
});

putXhr.send(putData);

// 4. PATCH Request
let patchUrl = "https://jsonplaceholder.typicode.com/posts/1"; // partial update
let patchXhr = new XMLHttpRequest();

patchXhr.open("PATCH", patchUrl);
patchXhr.setRequestHeader("Content-Type", "application/json");

patchXhr.onreadystatechange = () => {
    if (patchXhr.readyState === 4) {
        let data = JSON.parse(patchXhr.response);
        console.log("PATCH Response:", data);
        console.log(typeof data);
    }
};

patchXhr.onerror = () => {
    console.error("PATCH Error");
};

let patchData = JSON.stringify({
    title: "patched title"
});

patchXhr.send(patchData);

// 5. DELETE Request
let deleteUrl = "https://jsonplaceholder.typicode.com/posts/1"; // delete post with ID 1
let deleteXhr = new XMLHttpRequest();

deleteXhr.open("DELETE", deleteUrl);

deleteXhr.onreadystatechange = () => {
    if (deleteXhr.readyState === 4) {
        let data = JSON.parse(deleteXhr.response);
        console.log("DELETE Response:", data); // should be empty for jsonplaceholder
    }
};

deleteXhr.onerror = () => {
    console.error("DELETE Error");
};

deleteXhr.send();




// above code is with onreadystate in which we want to use if condition. So to eliminate this conditional we can use onLoad function instead of onreadystate
/*
    1. GET
    xhr.onload = () => {
        console.log("GET Response:", xhr.response);
        console.log(typeof xhr.response); // object
    };

    2. POST
    postXhr.onload = () => {
        console.log("POST Response:", postXhr.response);
        console.log(typeof postXhr.response); 
    };

    3. PUT
    putXhr.onload = () => {
        console.log("PUT Response:", putXhr.response);
    };

    4. PATCH
    patchXhr.onload = () => {
        console.log("PATCH Response:", patchXhr.response);
    };

    5. DELETE
        deleteXhr.onload = () => {
        console.log("DELETE Response:", deleteXhr.response); // should be empty
    };
*/