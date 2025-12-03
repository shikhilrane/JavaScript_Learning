let api_url = "https://api.github.com/users/shikhilrane";
async function handleApiUrl() {
    try {
        let data = await fetch(api_url);        // fetch api returns a promise so we used await there
        let jsonData = await data.json();       // Convted data into .json() and .json() will also returns a promise so we use await here (std procedure)
        console.log(jsonData);
        console.log(jsonData.twitter_username);
        console.log(jsonData.avatar_url);

        return jsonData;                        // as we have returned jsonData so we have to use .then and .catch
    } catch (error) {
        console.error(error)
        return error;
    }
}
handleApiUrl()
.then((res) => {
    console.log(res);    
}).catch((err) => {
    console.log(err);
});

//      OR

fetch("https://api.github.com/users/shikhilrane")
    .then(res => res.json())
    .then(res => {
        console.log(res)
        console.log(res.avatar_url)
    });