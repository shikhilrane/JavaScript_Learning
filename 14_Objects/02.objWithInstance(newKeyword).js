//*************************************** B. Creating an instance of object directly (Using new keyword) **********************************************
let symbolNewKeyword = Symbol ("new keyword");

let myInfo = new Object();
myInfo.name = {firstName:"Shikhil", lastName:"Rane"};
myInfo.age = 27;
myInfo.workExperience = "2 years";
myInfo.isFullStack = true;
myInfo.techStack = ["mern", "mean"]
myInfo[symbolNewKeyword] = "keyword for new keyword";
myInfo["which country?"] = "India"
myInfo.isWorkReady = function () {
    console.log("yes work ready");
}
console.log(myInfo);                    // accessing object
console.log(myInfo[symbolNewKeyword]);  // accessing symbol in an object
console.log(myInfo.isWorkReady());      // accessing function in an object

// methods of objects
// 1. accessing keys and value of an object (object.key or object['key])
console.log(myInfo.name);
console.log(myInfo.name.firstName);     // this way we can access nested object, (object.key.nestedkey)
console.log(myInfo.name.lastName);
console.log(myInfo['which country?']);  //this is another way to access the value of an object when key is written with spaces
console.log(myInfo.techStack[0]);       // this way we can access array elements in object

// 2. modifying value by key of an object (object.key or object['key'])
myInfo.workExperience = "3 years";
myInfo.name.firstName = "Nikhil" //modifying inner value of object in object
myInfo.techStack[1] = "meant" //modifying inner value of array in object
Object.defineProperty(myInfo, "age", {value:"26"}) // this is another way to modify value in object
Object.defineProperty(myInfo.name, "firstName", {value:"Nikhil"}) // this way we can modify value inner value of object
Object.defineProperty(myInfo, "techStack", {enumerable:false}); // this is how we can hide/delete any property
console.log(myInfo);

// 3. adding key and value in an object (object.newKey or object['newKey'])
myInfo.email = "shikhil@google.com";
myInfo.middleName = "Kishor"; // adding inner value to object in object
myInfo.techStack[2] = "meun"; // adding inner value to array in object
console.log(myInfo);

// 4. accessing keys of an object (Object.keys();)
console.log(Object.keys(myInfo));                       // o/p will be in array so that we can use many techniques of arrays on it

// 5. accessing values of an object (Object.values();)
console.log(Object.values(myInfo));                     // o/p will be in array so that we can use many techniques of arrays on it

// 6. delete keyword to delete the key and value of an object (delete object.key or delete object['key'])
delete  myInfo.email;
console.log(myInfo);

// 7. setting value of an key as null (object.key = null or object['key'] = null)
myInfo.symbolNewKeyword = null;
console.log(myInfo);

// 8. to make our object in array (Object.entries(objectname))
console.log(Object.entries(myInfo));

// 9. to if any key present in object (Object.hasOwnProperty("key"))
console.log(myInfo.hasOwnProperty("workExperience"));

// 10. Prevents adding properties to an object (restricts to add new properties)
Object.preventExtensions(myInfo)

// 11. Returns true if properties can be added to an object (returns true if we can add property or not)
console.log(Object.isExtensible(myInfo));

// 12. seal an object (Object.seal();) 
Object.seal(myInfo);
myInfo.workExperience = "4 years";          // we can only modify values of an object after using seal method
myInfo.allowedToWorkOutsideIndia = true;    // we can not add or delete from object after using seal method
console.log(myInfo);

// 13. Returns true if object is sealed
console.log(Object.isSealed(myInfo));

// 14. freeze lock the object (Object.freeze();)
Object.freeze(myInfo);
myInfo.workExperience = "5 years";
myInfo.hasPassport = true;
console.log(myInfo);                        // we can not add, delete or modify from object after using freeze method

// 15. Returns true if object is frozen
console.log(Object.isFrozen(myInfo));

// 16. adding two objects
let obj1 = new Object()
obj1[1] = "a",
obj1[2] = "b"

let obj2 = new Object()
obj2[3] = "c",
obj2[4] = "d"

let addnObj = Object.assign({},obj1,obj2); //applying {} is not compulsory but it increases readibility of the code, all the values will store in {}
console.log(addnObj);
let addnObjWithSpreadOp = {...obj1,...obj2}   // we can use spread operator to combine objects & it is widely used
console.log(addnObjWithSpreadOp);

// 17. for in loop for objects
for (const key in myInfo) {
    console.log(key);                       // this way we can access keys of object
    console.log(myInfo[key]);               // this way we can access values of object, (object[key])
}

// 18. we use Object.create(), when we want to create an object which will remain fixed & no other property should get delete from object
let obj = new Object(Object.create({
    huihuihui : 1,
    hello : "vfjdkbv"
}))

delete obj.hello;

console.log(obj);