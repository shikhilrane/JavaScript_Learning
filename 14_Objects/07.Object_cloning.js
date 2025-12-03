//                                                         Object Cloning
//      NOTE : as we know when we assign value of object like "let obj2 = obj1" then obj2 will point same refernce to obj1 but when we want to create 
//             make separate space for obj2 like obj1 in memory then we will use clone method

let src = {
    age : 12,
    wt : 40,
    ht : 180
}
console.log("src before cloning : ", src);
console.log();


//                                              1.  cloning by using spread operator '...'
let destination1 = {...src}     // now destination1 will create separate same memory like src in memory

src.age = 80;   // updated value for age in src but it will not get updated in destination1 as, destination1 will have seperate memory

console.log("src after cloning and updating value of 'age' with spread operator : ", src);
console.log("destination1 : ", destination1);
console.log();

// this way we can combine all the objects
let obj1 = {
    name : "Java",
    year : 1994,
    base : "Cpp"
}
let obj2 = {
    founder : "Coffee",
    year : 1994,
    base : "Python"
}
let combining1 = {...obj1, ...obj2};
console.log("Combined object : ", combining1);
console.log();

//                                              2.  cloning by using assign (Obejct.assign())
let destination2 = Object.assign({}, src);      // now destination2 will create separate same memory like src in memory


src.age = 120;   // updated value for age in src but it will not get updated in destination2 as, destination2 will have seperate memory

console.log("src after cloning and updating value of 'age' with assign : ", src);
console.log("destination2 : ", destination2);
console.log();

// this we we can combine all the objects
let obj3 = {
    name : "JS",
    year : 1995
}
let obj4 = {
    founder : "Brendon Eich",
    year : 1995
}
let combining2 = Object.assign({}, obj3, obj4);
console.log("Combined object : ", combining2);
console.log();


//                                  3.  cloning by using iteration (loop) (not recommended but still need know about this)

let destination3 = {};
for (const key in src) {
    let newKey = key;
    let newValue = src[key];

    // inserting key and value of src in object destination3
    destination3[newKey] = newValue;    // now destination3 will create separate same memory like src in memory
}

src.age = 160;      // updated value for age in src but it will not get updated in destination3 as, destination3 will have seperate memory

console.log("src after cloning and updating value of 'age' with iteration : ", src);
console.log("destination3 : ", destination3);
console.log();

//                                                      4.  Shallow and deep cloning

// Create an object with a nested object inside
let shallowSource = {
    name: "Test",
    nested: {
        a: 1
    }
};

// Perform a shallow clone using the spread operator
let shallowClone = { ...shallowSource };

// Modify the nested property in the cloned object
shallowClone.nested.a = 99;

// Because this is a shallow clone, the nested object is still shared
// So changes in the clone affect the original object too
console.log("After shallow clone & update:");
console.log("shallowSource.nested.a:", shallowSource.nested.a); // 🔁 Outputs: 99
console.log("shallowClone.nested.a:", shallowClone.nested.a);   // as we shallow cloned nested object, inner object will behave like source's object
console.log();

// 4.1. Deep Cloning with structuredClone() -----------
// This method creates a true deep copy, including nested objects
let deepClone1 = structuredClone(shallowSource);

// Modify the nested property in the deep clone
deepClone1.nested.a = 42;

// Since it's a deep clone, the original object remains unchanged
console.log("After structuredClone:");
console.log("shallowSource.nested.a:", shallowSource.nested.a); // Outputs: 99
console.log("deepClone1.nested.a:", deepClone1.nested.a); // as we used structuredClone() to clone nested object, inner object will have its own properties
console.log();

// 4.2 Deep Cloning with JSON stringify/parse -----------
// This also creates a deep clone, but with limitations:
// - Cannot handle functions, undefined, circular refs, or special types (Date, Map, Set, etc.)
let deepClone2 = JSON.parse(JSON.stringify(shallowSource));

// Modify the nested property in the JSON-based deep clone
deepClone2.nested.a = 77;

// Again, the original object remains untouched
console.log("After JSON stringify/parse:");
console.log("shallowSource.nested.a:", shallowSource.nested.a); // Outputs: 99
console.log("deepClone2.nested.a:", deepClone2.nested.a);   // as we used JSON.parse(JSON.stringify(shallowSource)); to clone nested object, inner object will have its own properties
console.log();

// ----------- 4.3 Deep Cloning with lodash.cloneDeep() -----------
// Use lodash's cloneDeep for safest deep cloning in real-world apps
// Requires installation: npm install lodash
/*
import cloneDeep from 'lodash/cloneDeep';

let deepClone3 = cloneDeep(shallowSource);
deepClone3.nested.a = 88;

console.log("After lodash cloneDeep:");
console.log("shallowSource.nested.a:", shallowSource.nested.a); // ✅ Outputs: 99
console.log("deepClone3.nested.a:", deepClone3.nested.a);
*/