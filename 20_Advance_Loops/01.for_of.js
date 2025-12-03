                                                            // for of loop 
                                                // (it will return values of an array)

                                              // use for array, map, set, string, object

// 1. for of loop using array
let myArray = ["shikhil", "Rane", 26]
for (let b of myArray){
    console.log(b);         // for of loop to get value of array (o/p => shikhil, Rane, 26)
}

// 2. for of loop using string
let nameStr = "Shikhil";
for (let character of nameStr) {
    console.log(character);     // for of loop to access of the characters
}
for (let character of nameStr.charAt(3)) {  // this is how we can apply diff methods as well
    console.log(character);     // for of loop to access character code at 3
}

// 3. for of loop using map
let arraykey = ["surname"];
let arrayValue = ["Rane"]
let lK = "location";
let locationKey = {lK};
let lV = "India";
let locationValue = {lV};

let myInfo = new Map([
    ["Name","Shikhil"],
    ["age",27],
    [4,7],
    [arraykey,arrayValue],
    [locationKey,locationValue],
    [true, "yes"]
]);

for (const [key,value] of myInfo) {
    console.log(`key is ${key} and its value is ${value}`);
}
for (const key of myInfo.keys()) { // this is how we can apply diff methods as well
    console.log(key);  // it will return keys
}
for (const value of myInfo.values()) {  // this is how we can apply different methods as well 
    console.log(value)  // it will return values
}

// 4. for of loop using set
let newSet = new Set([1,2,3,4,52,4,52,2,4,3,2,4,5,2])
newSet.add("Shikhil")
newSet.add("Shikhil")
newSet.add(true);
newSet.add(false);
let addObj = {name:"Shikhil"};
newSet.add(addObj);
console.log(newSet);

for (const i of newSet) {
    console.log(i);
}
for (const i of newSet.values()) { // this is how we can apply diff methods as well
    console.log(i);
}

// 5. for of loop using object.
let myCar = {
    brand : "Mercedes",
    price : 5000000,
    isBlack : true
}
for (const [key,value] of Object.entries(myCar)) {  // as we know we can't use for...of in objects so we use Object.entries(myCar)
    console.log(`${key} : ${value}`);
}