                                                            // Objects
/*
                        1. An object is a collection of properties, and a property is an association between a name (or key) and a value.
                        2. Object can hold string, number, boolean, array, function, etc. & can contain as many as keys and values
                        3. Objects data is written as,
                           let object = {
                               key : value,
                           }
                        4. there are 3 types by which we can create object
                           4.1 by object literals
                           4.2 by creating an instance of object directly (Using new keyword)
                           4.3 by using object constructor (Using this keyword)
*/



//**************************************** A. Creating Object with object literal (normal method) ************************************************
let mySymbol = Symbol("Symbol for bmw");

let car = {
    name : {
        modelID : 520,
        modelFuel : "d"
    },
    model  : 2023,
    functionality : ["drive", "fogg remover", "drls", "diesel"],
    "fuel capacity" : 50,
    variants : ["low", "middle", "top-end"],
    [mySymbol] : "this associated with bmw symbol",
    isAutomatic : true,
    greetMe :  function(){
        console.log("hey there how are you?");
    }
}
console.log(car);                   // accessing object
console.log(car["name"]);           // accessing object inside object (console.log(car.name);)
console.log(car.greetMe());         // accessing function in an object
console.log(car[mySymbol]);          // accessing symbol in an object
console.log(typeof car.mySymbol);   // checking type of an symbol

// methods of objects
// 1. accessing keys and value of an object (object.key or object['key'])
console.log(car.name);
console.log(car.name.modelID);      // this way we can access nested object, (object.key.nestedkey)
console.log(car.name.modelFuel);
console.log(car['fuel capacity']);      //this is another way to access the value of an object when key is written with spaces
console.log(car.variants[1]);           // this way we can access array elements in object

// 2. modifying value by key of an object (object.key or object['key'])
car['model'] = 2022;
car.name.modelID = 620; //modifying inner value of object in object
car.variants[1] = "moderate" //modifying inner value of array in object
console.log(car);
Object.defineProperty(car, "model", {value:2024}) // this is another way to modify value in object
Object.defineProperty(car.name, "modelID", {value:720}) // this way we can modify value inner value of object
Object.defineProperty(car, "isAutomatic", {enumerable:false}); // this is how we can hide/delete any property
console.log(car);

// 3. adding key and value in an object (object.newKey or object['newKey'])
car['color'] = "grey";
car.name.modelRange = "2lac" // adding inner value to object in object
car.variants[3] = "premium" // adding inner value to array in object
console.log(car);

// 4. accessing keys of an object (Object.keys(objectname);)
console.log(Object.keys(car));              // o/p will be in array so that we can use many techniques of arrays on it
console.log(Object.keys(car).length);  

// 5. accessing values of an object (Object.values(objectname);)
console.log(Object.values(car));            // o/p will be in array so that we can use many techniques of arrays on it

// 6. delete keyword to delete the key and value of an object (delete object.key or delete object['key'])
delete car.isAutomatic;
console.log(car);

// 7. setting value of an key as null (object.key = null or object['key'] = null)
car.color = null;
console.log(car);

// 8. to make our object in array (Object.entries(objectname))
console.log(Object.entries(car));

// 9. to check if any key present in object (Object.hasOwnProperty("key"))
console.log(car.hasOwnProperty("model"));

// 10. Prevents adding properties to an object (restricts to add new properties)
Object.preventExtensions(car)

// 11. Returns true if properties can be added to an object (returns true if we can add property or not)
console.log(Object.isExtensible(car));

// 12. seal an object (Object.seal();) 
Object.seal(car);
car.color = "black";    // we can only modify values of an object after using seal method
car.tyre = "MRF";       // we can not add or delete from object after using seal method
console.log(car);

// 13. Returns true if object is sealed
console.log(Object.isSealed(car));

// 14. freeze lock the object (Object.freeze();)
Object.freeze(car);
car.typeOfCar = "sedan";
console.log(car);       // we can not add, delete or modify from object after using freeze method

// 15. Returns true if object is frozen
console.log(Object.isFrozen(car));

// 16. adding objects
let obj1 = {
    1:"a",
    2:"b"
}
let obj2 = {
    3:"c",
    4:"d"
}
let addnObj = Object.assign({},obj1,obj2); //applying {} is not compulsory but it increases readibility of the code, all the values will store in {}
console.log(addnObj);
let addnObjWithSpreadOp = {...obj1,...obj2}   // we can use spread operator to combine objects & it is widely used
console.log(addnObjWithSpreadOp);

// 17. for in loop for objects
for (const key in car) {
    console.log(key);       // this way we can access keys of object
    console.log(car[key]);  // this way we can access values of object, (object[key])
}

// 18. we use Object.create(), when we want to extend class (We will see this later)
let car1 = {
    company : "BMW",
    model : "340i",
    price : 5600000,
    isAutomatic : true
};
let car2 = {
    company : "Audi",
    model : "A6",
    price : 6150000,
    isAutomatic : true
};

let newCar1 = Object.create(car1)
console.log(newCar1.company);

let newCar2 = Object.create(car2)
console.log(newCar2.price);

// 19. Loop on Object
let studentProfile = {
    name : "SKR",
    age : 19,
    city : "Pune",
    class : 10
}

// 1st way
let sP_Keys = Object.keys(studentProfile);
let sP_Values = Object.values(studentProfile);

for (let i = 0; i < sP_Keys.length; i++) {
    let key = sP_Keys[i];
    let value = sP_Values[i];
    console.log(`${key} : ${value}`);
}

// 2nd way
let keys = Object.keys(studentProfile);

for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let value = studentProfile[key];
    console.log(key + ":", value);
}

// 3rd way (for of loop)
let obj = {
    name : "Shikhil",
    age : 28
}
let objEntries = Object.entries(obj);
for (const [key,value] of objEntries) {
    console.log(key, value);
}

// 4rd way (for in loop)
for (const key in obj) {
    console.log(key, obj[key])
}