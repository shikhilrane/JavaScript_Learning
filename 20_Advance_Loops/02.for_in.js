                                                            // for in loop
                                                    // (it will return indexes of an array)

                                            // use for to find array index and object key and value
                                            
// for in loop using object
let obj = {
    Name : "shikhil",
    surname : "rane",
    age : 26
}
for (let a in obj){     
    console.log(a);         // for in loop to access keys of object (o/p => Name, surname, age)
    console.log(obj[a]);    // for in loop to access value of key object (o/p => shikhil, rane, 26)
}
for (let key in obj){     
    console.log(`${key} is the and ${obj[key]} is the value`);
}

// for in loop using array
let luckyArray = ["WebD", 1, 2, "full stack", 3, 4, 5,"is best", 6, 7, 8]
for (let a in luckyArray) {
    console.log(a);         // use to get index of array (o/p => 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    console.log(luckyArray[a]);         // use to get value of array (o/p => "WebD", 1, 2, "full stack", 3, 4, 5,"is best", 6, 7, 8)
}