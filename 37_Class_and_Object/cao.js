//                                                        Class and Object

//                                                 1. Class and Object creation
// Class (A blueprint for creating objects. It defines properties and methods that the objects will have.)
class C1 {                          // this is how class is created
    name = "S";                     // addition of variable in class
    canWalk() {                     // addition of function in class
        console.log("Walking");
    }
}
// Object (An instance of a class. It contains real values for the properties and can use the methods defined in the class.)
let obj1 = new C1();                // creation of Object of the class (new keyword creates new object for every instance)
console.log(obj1.name);             // accessing property of the class's object
obj1.canWalk();                     // accessing method of the class's object


//                                           2. Public and Private properties and methods
//  NOTE => every property and function in class is public by default if we want to make any property or function private then we have to use # in
//          before it's name 
//          private properties and method are not accessible outside the class so to access them out side class we have to use getter and setter
//          methods. Getter access the value of private property and setter allow to modify private property outside class
class C2 {
    name = "K";
    #age = 20;                      // Private property
    canTalk() {
        console.log("Talking");
    }
    #canWalk() {                    // Private method
        console.log("Walking");
    }

    // get and set for property
    get fetchAge(){                 // to access private property outside class we have to use getter (get)
        return this.#age;           // get method returns value of private property outside class
    }
    set modifyAge(value){           // to modify private property outside class we have to use setter (set)
        this.#age = value;          // set method sets value of private property outside class
    }

    // get and set for method
    get fetchCanWalk(){             // get method for private function doesn't work, it returns undefine
        return "Walking is a private function";     // so we explicitely returns a hard statement 
    }
    exposeCanWalk() {               // if we still want to allow calling a private method from outside, wrap it in a public method
        this.#canWalk();
    }

}
// Object (An instance of a class. It contains real values for the properties and can use the methods defined in the class.)
let obj2 = new C2();
console.log(obj2.fetchAge);         // fetching value of private property
obj2.modifyAge = 22;                // modifying value of private property
console.log(obj2.fetchAge);
console.log(obj2.fetchCanWalk);     // getter is possible for method that defines hard statement
console.log(obj2.exposeCanWalk());  // it will print value for private method 


//                                                   3. Constructor of the class
class C3 {
    name = "R";                 // Public property with default value "R"
    age;                        // Public property (no default value, will be set in constructor)
    #job = "Developer";         // Private property with default value "Developer"

    // Constructor: runs automatically when a new object is created from the class
    constructor(newName, newAge, newJob) {
        this.name = newName;    // Set the public 'name' property to the value passed as newName
        this.age = newAge;      // Set the public 'age' property to the value passed as newAge
        this.#job = newJob;     // Set the private '#job' property to the value passed as newJob
    }

    // Getter method to access the private '#job' property from outside the class
    get fetchJob() {
        return this.#job;       // Returns the value of the private '#job' property
    }
}

// Creating an object 'obj3' from class C3 and passing values to the constructor
let obj3 = new C3("Rane", 24, "Software Engineer");
console.log(obj3.name);       // Output: Rane (value set by constructor)
console.log(obj3.age);        // Output: 24 (value set by constructor)
console.log(obj3.fetchJob);   // Output: Software Engineer (accessed via getter for private property)

//                                                     4. Extending a class
class User {
    constructor(username){
        this.username = username;
    };
    logMe(){
        console.log(`USERNAME is ${this.username}`)
    };
}
class Teacher extends User {                                    // This will take properties of User in Teacher
    constructor(username, email, password) {
        super(username);                                        // super keyword brings constructor property of its extended class
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`New course was added by ${this.username}`);
        
    }
};
let newTeacher = new Teacher("Shikhil", "skr@gmail.com", 123);  // Made an object of the class Teacher
console.log(newTeacher);
console.log(newTeacher.logMe());                                // Can access the methods of extended class
console.log(newTeacher.addCourse());

let newUser = new User("Shikhil");                              // Made an object of the class User
console.log(newUser);
console.log(newUser.logMe());
// console.log(newUser.addCourse());                            // Can't access the methods of the class, to which current class is extened

console.log(newTeacher instanceof Teacher);                     // It will return true if object is made from that class
console.log(newUser instanceof User);

//                                                  5. Getter and setter in detail
class User {
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    // if we are using setter then we must have to use getter as well
    // getter to access constructor's value outside class
    get email(){
        return this._email;         // while returning, we have to use return keyword
    }

    // setter to set constructor's value outside class
    set email(value){
        this._email = value;        // while setting, we don't have to use return keyword
    }

    // getter to access constructor's value outside class
    get password(){
        return `${this._password}nothing`;  // password field can be protected to see by user
    }

    // setter to set constructor's value outside class
    set password(value){
        this._password = value;
    }

    // In getter and setter, we have to use other variable with this so that value will be given to user for getting and setting so we used _ there
}

let Shikhil = new User("skr@gmail.com", 123);
console.log(Shikhil.email);
console.log(Shikhil.password);


// By using function (old method before class)
function Database(email,password) {
    Object.defineProperty(this, "email",{
        get : function(){
            return this._email;
        },
        set : function(value){
            this._email = value;
        }
    })
    Object.defineProperty(this, "password",{
        get : function(){
            return this._password;
        },
        set : function(value){
            this._password = value;
        }
    })
    this.email = email;
    this.password = password;
}

let chai = new Database("chai@chai.com", 1234);
console.log(chai.email);
console.log(chai.password);

// by using object (not used alot)
let person = {
    email : "h@hc.com",
    password : "12345",

    get _email(){
        return this.email
    },

    set _email(value){
        this.email = value;
    }
}

let tea = Object.create(person)
console.log(tea.email)