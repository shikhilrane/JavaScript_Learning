//                                             Shallow Copy Vs Deep Copy of object

let original = {
    name : "Shikhil",
    address : {
        city : "pune"
    }
};

// Shallow Copy
let shallow = original;                 // stored object in another variable
console.log(shallow);
shallow.name = "Rane";                  // updated value of entity for newly stored variable
shallow.address.city = "Mumbai";        // updated value of entity for newly stored variable
console.log(original.name);             // Output for original object will be changed to "Rane" => "CHANGED"   (o/p = Rane)
console.log(original.address.city);     // Output for original object will be changed to "Mumbai" => "CHANGED" (o/p = Mumbai) 

// Deep Copy
let deep = structuredClone(original);   // stored object in another variable (structuredClone() is built in js method that create deep copy of given object, including nested objects, arrays, maps, sets, dates, and more without sharing reference)
deep.name = "Kishor";                   // updated value of entity for newly stored variable
deep.address.city = "Delhi";            // updated value of entity for newly stored variable
console.log(original.name);             // Output for original object will not be changed to "Kishor" => "UNCHANGED"   (o/p = Rane)
console.log(original.address.city);     // Output for original object will not be changed to "Delhi"  => "UNCHANGED"   (o/p = Mumbai)