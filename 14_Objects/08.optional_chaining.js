let obj = {
    name: "ABC",
    // locate : {country : "India"};
}

console.log(obj?.name);
console.log(obj.locate.country)     // If we access it like this, then it will give error because locate.country is commented or not present

console.log(obj?.name);
console.log(obj?.locate?.country)   // To get access of this, we will write it like this, which will return undefined