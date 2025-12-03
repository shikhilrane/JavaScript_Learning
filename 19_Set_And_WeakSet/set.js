//                                                         Set datatype
                // 1. It contains only unique value, set is even reffered as an advance object like map.
                // 2. it does not repeat any value from datatype like if there are 2 times 3 present in array then it will print it once.
                // 3. In set, data stored as a single collection of unique values.
                // 4. We can't access the element by their index and that why order is not guaranteed.
                // 5. We can add different types of data types in single set

let arr = [8,5,3,6,8,4,2,5,6,58,8,3,1,3,6,9];
let newSetArr = new Set(arr);
console.log(newSetArr); // set will not print repeatative numbers

let str = "Shikhil Kishor Rane"
let newSetStr = new Set(str);
console.log(newSetStr); // set will not print repeatative letters

// this is how we create a Set with value
let newSet = new Set([1,2,3,4,52,4,52,2,4,3,2,4,5,2])

// 1. adding a value in an set (setName.add(key,value))
newSet.add("Shikhil")
newSet.add("Shikhil")           // this can't be add again
newSet.add(["val1", "val2"]);
newSet.add(["val1", "val2"]);   // This can be added again because it doesn't care about what it stores inside of array
newSet.add(true);
newSet.add(false);
let addObj = {name:"Shikhil"};
let addObj1 = { name: "Shikhil" }; // This can be added again because it doesn't care about what it stores inside of object
newSet.add(addObj);
newSet.add(addObj1);
console.log(newSet);

// 3. checking a key if a it is present in a set (setName.has(key))
console.log(newSet.has("Shikhil"));

// 4. chekcing a size of set (setName.size)
console.log(newSet.size);

// 5. fetching keys from the set (setName.keys())
console.log(newSet.keys());

// 6. fetching values from the set (setName.values())
console.log(newSet.values());

// 7. converting set into an array (setName.entries)
console.log(newSet.entries());

// 8. . forEach loop applied on a set
newSet.forEach(function (n){
    console.log(n, n*n);
})

// 9. for...of loop on Set
let setArray = new Set([1, 2, 3, 3, 5, 6, 5, 6]);
let length = 0
for (const element of setArray) {
    length++;
}
console.log(length) // result will be 5
console.log(setArray.size)

// 10. delete an particular entity from an set (setName.delete(key))
newSet.delete(false)
console.log(newSet);

// 11. to clear all the entities from set (setName.clear())
newSet.clear();
console.log(newSet);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ WeakSet ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                          1. In WeakSet we can only store objects 
//                          2. we can't iterate WeakSet

let ws = new WeakSet();

// 1. adding object in the WeatSet
let obj1 = {name:"Shikhil"};
ws.add(obj1);
console.log(ws);

let obj2 = {surname:"Rane"};
ws.add(obj2);
console.log(ws);

// 2. checking if the given value is present in weakset 
console.log(ws.has(obj1));

// 3. deleteing object from weakset
ws.delete(obj1);
console.log(ws);