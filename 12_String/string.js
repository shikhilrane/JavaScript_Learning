                                                            // Strings
                                        /*
                                           Strings are used to store and manipulate text
                                           index starts from 0 & length starts from 1
                                        */  

                                        
// 1. String can be written as :-    ("", '')
let newStr = "this is string"; // (within double quotes)
let newstr1 = 'this is another way to declare string'; // (within single quotes)

// 2. Template Literals :-
// with the help of template literals its possible to user single quote and double quote in a single string
let newStr2 = "hey, \'Shikhil\' how are you doing today, \"great day\"";
console.log(newStr2);

// 3. String interpolation :-      (`${}`)
// we can directly insert variable inside template literals
let myName = "Shikhil"
console.log(`hello everyone my name is ${myName}, \'Thank you\'`);

// 4. String concatenation :- 
// string addition can be done by string concatenation
let firstName = "shikhil";
let lastName = " rane";
console.log(firstName + lastName);

let name = "Shikhil ";

// 5 String length :-    (.length)
// we can get length of string by this property
console.log(name.length);

// 6 String method to upper case :-     (.toUpperCase())
// string gets converted to upper case by this method
console.log(name.toUpperCase());

// 7 String method to lower case :-     (.toLowerCase())
// string gets converted to lower case by this method
console.log(name.toLowerCase());

// 8 String index :-    (variable[])
// we can get character at specified index
console.log(name[6]);

// 9 String method to get character index :-     (.charAt())
// we can get character at specified index by this method
console.log(name.charAt(3));

// 10 String to unicode of the character :-      (.charCodeAt())
// we can get unicode of specified index character by this method
console.log(name.charCodeAt(3));

// 11 String to get index number of the particular character in string :-      (.indexOf(""))
// we can get index of specified character from string
console.log(name.indexOf("i"));

// 12 String to get index number of next same character in string :-         (.indexOf("",next index number))
// same like indexOf property, but by this way we can get next same character that we got previously but it search specific character from specified index
console.log(name.indexOf("i", 3));     // (character, search from index number)

// 13 String to print specific characters from string :-        (.substring())
// it will print string from specified index to index (we can't give negative index in substring() method)
console.log(name.substring(2,6));      // (from(inclusive), to(exclusive))

// 14 String method to print string from specific number to end, specific and negative index number :-    (.slice())
console.log(name.slice(3));            // it will print string from specified index to end
console.log(name.slice(3,6));          // it will print string from specified index to specific index
console.log(name.slice(-6,-3));        // it will print string from negative specified index to negative specific index (it starts from last)
let str = "this is string to eliminate some words";
console.log(str.slice("this is string to eliminate".length));     // it will eliminate part of string we mention followed by .length

// 15 String method to print string from specific index to the specified length :-    (.substr())
// this method used to print specified index to the give length
console.log(name.substr(1,4));         // (from index, length from specified index)

// 16 String method to replace specific part of string :-        (.replace())
// it will replace part of string to given string
console.log(name.replace("Sh","N"));   // (present string/character to replace, other string/character to replace)

// 17 String method to check if the specified part in method is present in string or not :-       (.includes())
console.log(name.includes("khil"));  // it will check if the specified part is present in string or not

// 18 String method to split string from specified part from method :-       (.split())
console.log(name.split("i"));          // it will split string from specified character/string

// 19 String method to check characters starts with entered character :-        (.startsWith())
console.log(name.startsWith("S"));

// 20 String method to check characters ends with entered character :-        (.endsWith())
console.log(name.endsWith(" "));

// 21 String method to add another string in present string :-       (.concat())
let lName = "Rane";
console.log(name.concat(lName, ", The great"));    // (variable, string to add)

// 22 String method to erase unwanted whitespaces around string :-       (.trim())
let wordWithSpaces = ("      web developer       ");
console.log(wordWithSpaces.trim());
console.log(wordWithSpaces.trimStart()); //removes whitespace only from the start of a string
console.log(wordWithSpaces.trimEnd()); //removes whitespace only from the end of a string

// 23 String method to convert object type of string to normal string
let num = new String("hey there");     // constructor method to write string as an object
console.log(num);                      // o/p => [String: 'hey there']
console.log(typeof num);              // o/p => object
console.log(num.toString());           // o/p => this will convert object string to normal string
console.log(typeof(num.toString()));   // o/p => string
