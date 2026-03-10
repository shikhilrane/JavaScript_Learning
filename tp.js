function exeCb(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('data', data);
            let success = true;
            if (success) {
                resolve("Success")
            }
            else {
                reject(new Error("Unsuccessful"));
            }
        }, 2000);
    })
}
exeCb(3.8)
    .then(() => {
        console.log("Getting data 1...");
        return exeCb(4)
    })
    .then(() => {
        console.log("Getting data 2...");
        return exeCb(5)
    })
    .then((val) => {
        console.log(val);
    })
    .catch((err) => {
        console.error(err)
    })