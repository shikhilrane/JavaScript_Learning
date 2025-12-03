//                                                         Map datatype
//           1. Map is a dataype which is similar to object like key value pair (advance object)
//           2. we can only give string as an key in object but in map we can give anything as a key like string, number, object
//           3. Order of key & value at time of execution will be same as we set while adding them whilst in object symbol execute last
//                      

let surnameKey = ["surname"]             // This is how we can make key for array to add in map as if we want to access using .get we can get it
// to add object in map
let dk = "designation"                   // This is how we can set key value for object to add in set 
let designationKey = {dk};               // This is how we can get that key value in object to define in map
let dV = "software Engineer"             // This is how we can set value for object to add in set 
let designationValue = {dV};             // This is how we can get that value in object to define in map

let myInfo = new Map([
    ["Name","Shikhil"],
    ["age",27],
    [4,7],
    [surnameKey,["Rane"]],
    [designationKey,designationValue],
    [true, "yes"]
]);
console.log(myInfo);

// 1. adding a value in an map (mapName.map(key,value))
myInfo.set("contact","shikhil@mail.com");
myInfo.set("weight", "71 Kgs");
myInfo.set("weight", "71.5 Kgs"); // it will overwite the original value
myInfo.set([3],[6]);
let cK = "cell";
let cellKey = {cK};
let cV = 123456;
let cellValue = {cV};
myInfo.set(cellKey,cellValue)
console.log(myInfo);

let person1 = {
    id: 1,
    firstName: "SKR"
}
myInfo.set(person1, {age: 8, gender: "male"}) // this way we can even add object
console.log(myInfo.get(person1).age)

// 2. fetch a value from a map (mapName.get(key))
console.log(myInfo.get(4));
console.log(myInfo.get(surnameKey));
console.log(myInfo.get(designationKey));

// 3. checking a key if a it is present in a map (mapName.has(key))
console.log(myInfo.has(cellKey));

// 4. chekcing a size of map (mapName.size)
console.log(myInfo.size);

// 5. fetching keys from the map (mapName.keys())
console.log(myInfo.keys());

// 6. fetching values from the map (mapName.values())
console.log(myInfo.values());

// 7. converting map into an array (mapName.entries)
console.log(myInfo.entries());

// 8. delete an particular entity from an map (mapName.delete(key))x
myInfo.delete(true);
console.log(myInfo);

// 9. forEach loop applied on a map
myInfo.forEach(function(keys,values){
    console.log(keys, values, keys+values);
})

// 10. to clear all the entities from map (mapName.clear())
myInfo.clear();
console.log(myInfo);

// 11. to iterate map
let newMap = new Map([
    ["name", "Shikhil"],
    ["number", 97],
    ["isDeveloper", true],
    [["country"], ["India"]],
]);

let entriesMap = newMap.entries();
for (const [key,value] of entriesMap) {
    console.log(key, value);
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ WeakMap ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                          1. In WeakMap, keys must be objects only
//                          2. we can't iterate WeakMap

let wm = new WeakMap();

// 1. adding object in the WeatMap
let myObj1 = {name:"Shikhil"}
wm.set(myObj1);

let myObj2 = {surname:"Rane"}
wm.set(myObj2);

// 2. checking if the given value is present in WeakMap
console.log(wm.has(myObj1));

// 3. fetching value from WeakMap
console.log(wm.get(myObj1));

// 4. deleteing object from WeakMap
wm.delete(myObj1);
console.log(wm);