                                                            // Arrays
                            /*
                                1. An array is a collection of items of same data type stored at contiguous memory locations
                                2. array van hold more than one values
                                3. aray can hold numbers, strings, boolean values (true and false), characters, objects & so on
                                4. index starts from 0 & length starts from 1
                            */  

 
let marks = [43,64,23,546,65,98,665,"this is string",true,665,435,48,6456];

// 1. printing array
console.log(marks);

// 2. accessing particular value of an array
console.log(marks[4]);
console.log(marks[6]);
console.log(marks[2]);
console.log(marks[9]);
console.log(marks[19]);

// 3. finding length of array
console.log(marks.length);

// 4. modifying values of array
marks[6] = 5000;
console.log(marks);

// 5. adding value in an array
marks[13] = 9000;
console.log(marks);
console.log(marks.length);

// ARRAYS METHODS

// 6. converting array to string
console.log(marks.toString());
console.log(typeof marks.toString());

// 7. it checks if the given element present in array or not
console.log(marks.includes(98));

// 8. it gives index of the given element 
console.log(marks.indexOf(665));
console.log(marks.indexOf(665,7)); // to check next after first

// 9. it will return an element at specified index
console.log(marks.at(3));

// 10. it will check if the given entity is array or not
console.log(Array.isArray("Shikhil"));

// 11. it will convert any data type into array
console.log(Array.from("Shikhil"));             // it will make array of every letter seperately
console.log(Array.of("Shikhil", "Rane"));       // it will convert whole data type into  single array

// 12. .join() to join array elements with provided character
console.log(marks.join(" - "));  // o/p will be as an string

// 13. to remove last element of an array we use .pop() method
console.log(marks.pop());       // it will return poped element
console.log(marks);             // original array got changed as we used .pop() method, inshort it changed original array

// 14. to add element at end in an array we use .push() method
console.log(marks.push("this is pushed value"));  //it will return length of an array
console.log(marks);

// 15. to remove first element of an array
console.log(marks.shift());       // it will return shift element
console.log(marks);               // original array got changed as we used .shift() method, inshort it changed original array

// 16. to add new element in the beginnning of an array
console.log(marks.unshift("this is unshift"));  //it will return length of an array
console.log(marks);

// 17. array element can be deleted using delete opearator (delete is not method infact this is an operator)
delete marks[7];
console.log(marks);
console.log(marks.length);      // it doesn't affect the length of an array

// 18. to concat 1 or more arrays with each other we use .concat() method
let a1 = [1,2,3];
let a2 = [4,5,6];
let a3 = [7,8,9];
let newAdd = a1.concat(a2,a3);
console.log(newAdd);

// 19. adding more arrays with spread opearator
let newWayToAdd = [...a1, ...a2, ...a3];
console.log(newWayToAdd);

// 20. it will convert nested array into our desired depth
let a = [1,3,2,4,2,[5,4,6],9,6,3,[4,6,[6,9]]]
let a_nestedArr = a.flat(Infinity);   // we can define that how much depth we want in numbers, if we give 1 then, 1 array depth will we get flat
console.log(a_nestedArr);

// 21. we can sort array in an ascending order by using .sort() method (it changes original array)
console.log(marks.sort());      // it sorts alphabetically by first letter

// 22. to sort values of an array with ascending order numerically we need to use compare function
function compare(a,b) {
    return a - b            // if we use b - a it will return sort in descending order, this is standard function 
}
console.log(marks.sort(compare));

// 23. to reverse an array
console.log(marks.reverse());

// 24. splice to delete and modify array with new element
let newArray = [4,7,2,5,8,6,3,9]
console.log(newArray.splice(3,2,99,88));    // it will show number with got deleted
//                    in splice
//                      1st no. is index no. from which splice operation is applied (here 3(splice wll applied from index 3))
//                      2nd no. is length, till how much numbers you have to delete (here 2(from index 3, 2 elements gets deleted))
//                      3rd and 4th no. is, the number which we want to add (here 99,88), we can add as many as numbers
console.log(newArray);                      // it will show modified arrray with new number added

// 25. slice
let newArray2 = [65,432,7665,43453,65564,645,43]
console.log(newArray2.slice(2)); // it will print element from specified index
console.log(newArray2.slice(2, 4)); // it will print element from specified index to length we specified but will exclude last ele of length
console.log(newArray2);         //it doesn't modify original array

// 26. Cloning an Array
let array1 = ["Item1", "Item2"];
    // 1st Method using concatination
let array2 = [].concat(array1);
console.log(array1 === array2);
    // 2nd Method using Spread operator
let array3 = [...array1];
console.log(array1 === array3);

// 27. Loop on Array
let students = [87,98,76,87,98,63,86,42,94,76,23,92,70];

for (let i = 0; i < students.length; i++) {
    console.log(i)  //  It will print index of arrays
}

console.log();

for (let i = 0; i < students.length; i++) {
    console.log(students[i])    //  It will print elements of arrays
}

console.log();
 // Using while loop
let i = 0;
while (i<students.length) {
    console.log(students[i]);
    i++;
}

// 28. Array destructuring 
let myArray = ["value1", "value2", "value3", "value4"];
    // 1st way
let valueOne = myArray[0];
let valueTwo = myArray[1];
console.log(valueOne, valueTwo);
    // 2nd way by actually destructuring
let [myVariable1, ,myVariable2] = myArray;   // "value3" and "value4" wont get any space in array destructuring
console.log(myVariable1);
console.log(myVariable2);
    // 2.1
let [myVar1, myVar2, ...restVars] = myArray
console.log(myVar1);
console.log(myVar2);
console.log(restVars);