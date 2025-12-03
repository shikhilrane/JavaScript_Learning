//                                                      // Objects in array

let myArr = [
    {
       name : "shikhil" ,
       lName : "rane",
       age : 27,
       designation : "full stack developer"
    },
    {
       name : "erling" ,
       lName : "haaland",
       age : 23,
       designation : "footballer"
    }
]
console.log(myArr);

// NOTE :- we have covered all the methods of array and object in their respective chapters

// A. Array methods for objects in it

// 1. Accessing array elements
console.log(myArr[0]);
console.log(myArr[1]);

// 2. finding length of an array
console.log(myArr.length);

// 3. modifying value within object in an array
myArr[0] = {name: "shikhil", lName:"rane", age:28, designation: "full and full stack web d"}

// 4. adding one more object in an array
myArr[2] = {name:"phil", lName:"foden", age:23, country:"england"};
console.log(myArr);

// ARRAYS METHODS

// 5. converting array to string
console.log(myArr.toString(), typeof myArr.toString());

// 6. .join() to join array elements with provided character
console.log(myArr.join("_"), typeof myArr.join("_"));

// 7. to remove last element of an array we use .pop() method
console.log(myArr.pop());   // it will return poped element
console.log(myArr);         // original array got changed as we used .pop() method, inshort it changed original array

// 8. to add element at end in an array we use .push() method
console.log(myArr.push({ name: 'phil', lName: 'foden', age: 23, country: 'england' }));     //it will return length of an array
console.log(myArr);

// 9. to remove first element of an array
console.log(myArr.shift());
console.log(myArr);

// 10. to add new element in the beginnning of an array
console.log(myArr.unshift({
    name: 'shikhil',
    lName: 'rane',
    age: 26,
    designation: 'full and full stack web d'
  }));
console.log(myArr);

// 11. array element can be deleted using dalete opearator (delete is not method infact this is an operator)
delete myArr[2];
console.log(myArr);
console.log(myArr.length);// it doesn't affect the length of an array

// 12. to concat 1 or more arrays with each other we use .concat() method
let arr1 = [
    {
        vehicle : "car",
        fuel : "diesel"
    },
    {
        vehicle : "bike",
        fuel : "petrol"
    }
]
let arr2 = [
    {
        vehicle : "bus",
        fuel : "cng"
    },
    {
        vehicle : "supercar",
        fuel : "n2"
    }
]
let arr = arr1.concat(arr2);
console.log(arr);

// 13. we can sort array in an ascending order by using .sort() method (it changes original array)
console.log(arr.sort());    // it sorts alphabetically by first letter

// 15. to sort values of an array with ascending order numerically we need to use compare function
function compare(a,b){
    return a-b;         // if we use b - a it will return sort in descending order, this is standard function 
}
console.log(arr.sort(compare));

// // 16. to reverse an array
// console.log(myArr.reverse(), "this**********"); // its not working now cause we applied some other operation below on this array

// 17. splice to delete and modify array with new element
console.log(arr.splice(1,1,{ name: 'phil', lName: 'foden', age: 23, country: 'england' }));
console.log(arr);

// 18. slice
console.log(arr.slice(2,3));
console.log(arr);

// 19. loops on object
for (const key in myArr) {
    console.log(key);
}

for (const iterator of myArr) {
    console.log(iterator);
}


// B. object method to apply on array object

// 1. Storing objects of an array in variable to perform all the object method on it
let sr = myArr[0];      // first object
let eh = myArr[1];      // second object
console.log(sr,eh);

// 2. accessing object key & value in an object of an array
console.log(sr.lName); 
console.log(eh.lName);

// 3. adding key & value in an object of an array
eh.country = "Norway";
console.log(myArr);

// 4. modifying key & value of an object in an array
eh.age = 24;
console.log(myArr);

// 5. accessing keys of an object (Object.keys(objectname);)
console.log(Object.keys(sr));   // o/p will be in array so that we can use many techniques of arrays on it

// 6. accessing values of an object (Object.values(objectname);)
console.log(Object.values(sr)); // o/p will be in array so that we can use many techniques of arrays on it

// 7. delete keyword to delete the key and value of an object (delete object.key or delete object['key'])
delete eh.country;
console.log(eh);

// 8. setting value of an key as null (object.key = null or object['key'] = null)
eh.age = null;
console.log(eh);

// 9. to make our object in array (Object.entries(objectname))
console.log(Object.entries(eh));

// 10. to check if any key present in object (Object.hasOwnProperty("key"))
console.log(eh.hasOwnProperty("designation"));

// 11. seal an object (Object.seal();) 
Object.seal(eh);
eh.designation = "athlete";    // we can only modify values of an object after using seal method
eh.club = "Man City";       // we can not add or delete from object after using seal method
console.log(eh);

// 12. freeze lock the object (Object.freeze();)
Object.freeze(sr);
sr.country = "india";
console.log(sr);       // we can not add, delete or modify from object after using freeze method

// 13. adding objects
// let sreh = Object.assign({}, sr, eh);
// console.log(sreh, "*************");
let sreh2 = {...sr, ...eh};
console.log(sreh2);

// 14. for in loop to access 
for (const key in sr) {
    console.log(key);
    console.log(sr[key]);
}