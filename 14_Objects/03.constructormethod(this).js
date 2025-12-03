//********************************************** C. using object constructor (Using this keyword) **************************************************

// by using object constructor method (i.e. Using this keyword) we can take input by the user 
// this keyword is used in this method to take input from usser for particular key 
// parameter and value in this function must be equal respectively with the sequence
// according to sequence of parameter and value, user need to give input value
// new keyword is used while creating variable for function as this is a constructor method

let symbolNewKeyword2 = Symbol("this is macbook with symbol")

function MacBook(generation,typeOfDevice,companyName,modelName,manufacturingYear,screenSize,r1,r2,symbolNewKeyword,softwareUpdate) {
    this.genericName = {generation,typeOfDevice};
    this.companyName = companyName;
    this.modelName = modelName;
    this.manufacturingYear = manufacturingYear;
    this.screenSize = screenSize;
    this.dynamicRam = [r1, r2]
    this[symbolNewKeyword2] = symbolNewKeyword;
    this.geneSoftUpdate = softwareUpdate
    this.softwareUpdate = function () {
        return this.geneSoftUpdate;
    }
}
let myLaptop = new MacBook("modern", "laptop","apple computers","MacBook Pro 16 Inch",2019,"16 inch","4gb","8gb","keyword for new keyword","yes updates are availale");
console.log(myLaptop);
let otherlaptop = new MacBook("laptop","apple computer","MacBook Air 13 inch",2021,"13 inch","4gb","8gb","keyword for new keyword","yes updates are availale")
console.log(otherlaptop);

// methods of objects
// 1. accessing keys and value of an object (variable.key or variable['key])
console.log(myLaptop.genericName);
console.log(myLaptop.genericName.generation);       // this way we can access nested object, (variable.key.nestedkey)
console.log(myLaptop.genericName.typeOfDevice);
console.log(myLaptop['genericName']);
console.log(myLaptop.dynamicRam[1]);                // this way we can access array elements in object

// 2. modifying value by key of an object (variable.key or variable['key'])
myLaptop.screenSize = "15.6 inch";
console.log(myLaptop);

// 3. adding key and value in an object (variable.newKey or variable['newKey'])
myLaptop.originCountry = "USA";
console.log(myLaptop);

// 4. accessing keys of an object (Object.keys(variable);)
console.log(Object.keys(myLaptop));                         // o/p will be in array so that we can use many techniques of arrays on it

// 5. accessing values of an object (Object.values(variable);)
console.log(Object.values(myLaptop));                       // o/p will be in array so that we can use many techniques of arrays on it

// 6. delete keyword to delete the key and value of an object (delete variable.key or delete variable['key'])
delete myLaptop.modelName;
console.log(myLaptop);

// 7. setting value of an key as null (variable.key = null or variable[key] = null)
myLaptop[symbolNewKeyword2] = null;
console.log(myLaptop);

// 8. to make our object in array (Object.entries(variableName))
console.log(Object.entries(myLaptop));

// 9. to if any key present in object (Object.hasOwnProperty("key"))
console.log(myLaptop.hasOwnProperty("screenSize"));

// 10. Prevents adding properties to an object (restricts to add new properties)
Object.preventExtensions(MacBook)

// 11. Returns true if properties can be added to an object (returns true if we can add property or not)
console.log(Object.isExtensible(MacBook));

// 12. seal an object (Object.seal(variable);) 
Object.seal(myLaptop);
myLaptop.manufacturingYear = 2020;  // we can only modify values of an object after using seal method
myLaptop.color = "grey";            // we can not add or delete from object after using seal method
console.log(myLaptop);

// 13. Returns true if object is sealed
console.log(Object.isSealed(MacBook));

// 14. freeze lock the object (Object.freeze(variable);)
Object.freeze(myLaptop);
myLaptop.companyName = "samsung";
myLaptop.price = 200000;
console.log(myLaptop);              // we can not add, delete or modify from object after using freeze method

// 15. Returns true if object is frozen
console.log(Object.isFrozen(MacBook));

// 16. adding two objects
function obj1(one,two){
    this.one = one,
    this[2] = two
}
function obj2(three,four){
    this.three = three,
    this.four = four
}
let objOne = new obj1 ("a","b");
let objTwo = new obj2 ("c","d");
let addnObj = Object.assign({},objOne,objTwo); //applying {} is not compulsory but it increases readibility of code, all the values will store in {}
console.log(addnObj);
let addnObjWithSpreadOp = {...objOne,...objTwo}   // we can use spread operator to combine objects & it is widely used
console.log(addnObjWithSpreadOp);

// 17. for in loop for objects
for (const key in myLaptop) {
    console.log(key);               // this way we can access keys of object
    console.log(myLaptop[key]);     // this way we can access values of object (variable[key])
}