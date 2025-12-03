//                                                       Advance Objects

// 1. Fixed Object's descriptor (use to check if property/properties are writable, enumerable and configurable)
let descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);
/*
    1. getOwnPropertyDescriptor() is the method of Objects in which it return if the particular property of an object can,
        a.  writable: false (false → You cannot change Math.PI (e.g., Math.PI = 4 won't work))
        b.  enumerable: false (false → It will not show up in for...in or Object.keys(Math) means we can't use this prop in loops)
        c.  configurable: false (false → You cannot delete or reconfigure the property)
    2. to check descriptor of multiple properties, use getOwnPropertyDescriptors().
    3. here we checked Math.PI property which is a fixed property as we checked in getOwnPropertyDescriptor() method
    4. JS's fixed properties are not changable
*/

// 2. Custom Object's descriptor
let chai = {
    name : "ginger chai",
    price : 250,
    isAvailable : true,
    orderChai : function(){
        console.log("chai fat gayi");
    }
}
console.log(chai);                              // It will log the object chai

// Printing descriptor of property 
console.log(Object.getOwnPropertyDescriptor(chai, "name")); // It will log descriptor of the property "name". (all will be true for custom)
console.log(Object.getOwnPropertyDescriptors(chai));        // It will log descriptor of all properties of object. (all will be true for custom)

// for...of loop on object to iterate object
for (const [key,value] of Object.entries(chai)) {       // It will access keys and values of Object chai. Object.entries(chai) will treat it as object
    if (typeof value !== "function") {                  // we added function which we dont want to enumerate so we wrapped it in if condition
        console.log(`${key} : ${value}`);
    }
}

// changing behaviour of the property of an object
Object.defineProperty(chai, "name", {
    enumerable : false                                          // Marked enumeration of property name as false so it won't execute in loop
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));     // Checked if enumerable is false or not

for (const [key,value] of Object.entries(chai)) {
    if (typeof value !== "function") {
        console.log(`${key} : ${value}`);                       // name : "ginger chai" wont execute as we marked false for enumerable
    }
}