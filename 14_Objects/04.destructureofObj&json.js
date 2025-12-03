// A. de-structuring of an object
// destructring is used to simplify object, it is beneficial when we use react for project development

let course = {
    studentName : "Shikhil",
    age : 27,
    courseName : "full stack web development course",
    city : {
        firstCity : "Nashik",
        secondCity : "Indore"
    }
}
console.log(course.studentName);                // normal way to access key of an object

//using destructuring of an key we can simplify it for further use, it doesn't change the result
//      (key)  (short name  (object)
//              to key)
//      ||        ||       ||
//      V         V        V
let {courseName : cN} = course
console.log(cN);

let {city : {firstCity : fc}} = course;
console.log(fc);

// Destructuring of nested object in array

let users = [
    {userId: 1, userLocation : "India", isDeveloper: false},
    {userId: 2, userLocation : "Spain", isDeveloper: true},
    {userId: 3, userLocation : "United K", isDeveloper: false}
]

let [user1, user2, user3] = users

let [{userLocation}, /* Skipped user2 */ , {isDeveloper}] = users
console.log(userLocation, isDeveloper)


// B. JSON API intro
/*
    1. JSON is a documentation of an API
    2. API is nothing but how you write that values
    3. API value comes from backend in JSON format
    4. JSON is nothing but an object with no name
    5. JSON has keys and value
    6. JSON keys are written within " " as these are pure strings
    7. Syntax :- {
                    "keys" : "values"
                 }
    8. API can be in arrays as well
*/

// this is how JSON looks like :-
// {
//     "fName" : "Shikhil",
//     "lName" : "Rane",
//     "age"   ; 27,
//     "designation" : "full stack developer"
// }