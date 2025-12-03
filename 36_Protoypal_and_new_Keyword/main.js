//                                               Prototypal Behaviour and new keyword
/*
    1. In browser console, if we make any array or object and then we print it on console of the browser then we get dropdown arrow, then after    
       clicking that arrow we can able to see prototype tab as well. We are going to learn about that prototype.
    2. JS is has a prototypal behavoiur mean if JS can't find satisfactory output then it check its parent's prototype if still can't found then it 
       will go to its grandparent to search for result till it get null
    3. Prototype is the thing that can give us access of new keyword, classes, this keyword, prototypal inheritance
    4. If we make array, string or function on browser and click on that array or string or function, we get object prototype of that data type
       It means that arrray, string and fucntion have object in it and we can apply operation of object on it becasue in JS everything is object
                                    Function--->-----|
                                                     |
                                                     V
                                                     |
                                    Array------>-----|------>-----------Object------->------null
                                                     |
                                                     ^
                                                     |
                                    String----->-----|
    5. It means properties available at objects are available at array, string and function
*/

//                                              Custom Prototype and significance of new keyword

// Constructor type of function
function user(userName, loginCount){        // constructor type of function
    this.userName = userName;
    this.loginCount = loginCount;
    // return this;
}
let userInfo1 = new user("Shikhil", 10);    // create a new instance/object of user with new keyword
console.log(userInfo1);
console.log(userInfo1.constructor);         // It will return a function, of which this object is instance of

let userInfo2 = new user("Rane", 15);       // create a new instance/object of user with new keyword (if dont use new keyword then it will overwite value of userInfo1)
console.log(userInfo2);
console.log(userInfo2 instanceof user);     // It will return true if userInfo2 is instanceof user constructor
console.log(userInfo2 instanceof Object);   // It will return true as every object is instance of Object

// Function referring as an Object
function numMultiplyBy5(num){
    return num*5;
}
console.log(numMultiplyBy5(4));

numMultiplyBy5.power = 3;               // can add like this in function
console.log(numMultiplyBy5.power);      // can access that added value like we do in objects
console.log(numMultiplyBy5.prototype);

// Creating own prototype
function createtUser (username, score){    // created a function in which we took 2 parameters as userName and score
    this.username = username;              // this will indicate the current context that whatever the argument will pass here will go to the username
    this.score = score;                    // this will indicate the current context that whatever the argument will pass here will go to the score
}

createtUser.prototype.increaseScore = function(){   // custom prototype
    this.score++;
}

createtUser.prototype.printMe = function(){         // custom prototype
    console.log(`Established in ${this.score}`);
}

let js = new createtUser("JavaScript", 1997); // here we use new becasue new keyword bind up everything related to function, without new it can't bind
console.log(js);
js.increaseScore();             // This custom prototype will increase the score
js.printMe();                   // This custom prototype will print  the score

let java = new createtUser("Java", 1995); // here we use new becasue new keyword bind up everything related to function, without new it can't bind
console.log(java);
java.increaseScore();
java.printMe();

/*
    6. The above thing we did is a constructor function as we do in classes
    7. JS give constructor function with help new keyword (we can also do this with class in JS as we saw in 28th chapter)
    8. This is the behind the scene of JS constructor and classes is doing same as it classes are just wrapper of this method for better 
       understanding of the JS constructor
    9. If we don't use new keyword then JS won't loop up to bind anything with the function and return as undefined but after using new keyword JS 
       will everything related with it
   10. from line 46, we created a new object 'js'. This object is referring to function createUser and this function is having another user created  
       prototypes. so to bind these all prototypes with fucntion createtUser, we use new keyword.
*/

//---------------------------------------------------------------------------------------------------------------------------------------------------

//                                                  Advance Prototype Section

// 1. Custom prototype for String
let myName = "    Shikhil     ";
let myCountry = "India     ";
console.log(myName.length);
console.log(myCountry.length);

// as we have entered my name let myName = "Shikhil     "; and let myCountry = "India     "; with multiple spaces to it. As we know we can do this by myName.trim().length and myCountry.trim().length to trim spaces. But this is not a great approach to follow as this is not perfect approach becasue we have to apply .trim().length everywhere. Instead of we will make our own method with name .trueLength() that will directly trim the whitespaces

String.prototype.truelength = function(){
    console.log(`True length is ${this.trim().length}`);
}
myName.truelength();
// Here we make custom prototype method for string that will trim whitespaces from the string

// Creating custom property from String
Object.defineProperty(String.prototype, 'truelength', {
    get: function() {
        return this.trim().length;
    }
});
console.log(myName.length);       // 14 (with spaces)
console.log(myName.truelength);   // 7  (trimmed length)

// 2. Custom prototype for Arrays and Objects
let myHeroes = ["Thor", "SpiderMan"]

let heroPower = {
    Thor : "Hammer",
    SpiderMan : "Sling",
    getSpiderPower : function(){
        console.log(`SpiderMan power is ${this.SpiderMan}`);
    }
}

// heroPower.shikhil() // as we can know we can make our methods, by using .prototype but by making such method here it will be only applicable to this object 
// and here i want to make a prototype that will be applicable to any array, string, function and object. 
// And as we know, every data type (i.e. array, string, function) contains object in it. So if we apply custom prototype method directly to Object then every data type will get that custom prototype method. So in such case we can simply assign a custom prototype method directly to Object (refer above diagram of function, array, string is going through object).

Object.prototype.shikhil = function(){
    console.log("Shikhil is present in all objects");
}
heroPower.shikhil();
myHeroes.shikhil();
// .shikhil() will be applied to heroPower (which is an Object) and myHeroes (which is an Array) (also this method will be applied to function and Strings as well as Object is present in all of these data types).

Array.prototype.heyShikhil = function(){
    console.log("Shikhil says hello");
}
// heroPower.heyShikhil();
myHeroes.heyShikhil();
// .heyShikhil() won't be applied to heroPower (which is an Object) but applied myHeroes (which is an Array) (this method will only be applied to Arrays because array, strings and functions doen't share their custom prototype methods with eachother and not even with objects).

/*
    Sharing of custom prototype methods
    1. Object = shares with everyone (i.e. with array, strings and functions because each of these datatype contain object in its browser prototype)
    2. array, strings and functions = doesn't share anything with eachother and not even with objects
*/

// Creating custom property for Objects
Object.defineProperty(Object.prototype, 'keyCount', {
    get: function() {
        return Object.keys(this).length;
    }
});

const car = { make: "Toyota", model: "Corolla" };
console.log(car.keyCount); // 2

// Creating custom property from Array
Object.defineProperty(Array.prototype, 'firstElement', {
    get: function() {
        return this[0];
    }
});

const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits.firstElement); // Output: "Apple"
console.log(fruits.keyCount); // Output: 3

//-------------------------------------------------------------------------------------------------------------------------------------------------

//                                                           Inheritance 
// Old syntax of inheritance
// 1st way
let surname = {
    lname : "Rane",
    email : "skr@google.com"
}
let name = {
    softwareDev : true
}
name.__proto__ = surname                     // Prototyping properties of surname into name

console.log(name.lname);                     // inherited from surname
console.log(name.email);                     // inherited from surname

// 2nd way
let working = {
    currentlyWorking : true
}
let location = {
    city : "Pune",
    fullTime : true,
    __proto__ : working                     // Prototyping properties of working into location
}
console.log("location.city:", location.city);               // from location
console.log("location.fullTime:", location.fullTime);       // from location
console.log("location.currentlyWorking:", location.currentlyWorking); // inherited from working


// modern syntax of inheritance
let company = {
    companyName : "MNC"
}
let fromCountry = {
    companyCountry : "USA"
}
let companyInfo = Object.setPrototypeOf(company, fromCountry);

console.log(companyInfo.companyName);      // "MNC"  (own property)
console.log(companyInfo.companyCountry);   // "USA"  (inherited from prototype)