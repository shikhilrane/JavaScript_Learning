//                                                      Object Prototyping
//                      1. we can't use function which is in in the other object 
//                      2. so when we have to use that function for other similar object we make a use of Object prototyping
//                      3. we simply insert __proto__ : (obj name in which function is) in the object in which we have to use that function

let obj1 = {
  name : "Shikhil",
  age : 27,
  itObj : function (country) {
    if (country==undefined) {
      console.log("enter country name : ");
    }
    return (`name of the candidate is ${this.name} and age of the candidate is ${this.age} and he is from ${country}`);
  }
}
let obj2 = {
  name : "Haaland",
  age : 23,
  __proto__ : obj1   // we took access of function in obj1 in an Obj2
}
let obj3 = {
  name : "lamine yamal",
  age : 16,
  __proto__ : obj1   // we can insert obj2 in proto of obj3, cause that function we required is already present in obj2 like, __proto__ : obj2
}


let firstObject = obj1.itObj("India")
console.log(firstObject);

let secondObject = obj2.itObj()
console.log(secondObject);

let thirdObject = obj3.itObj("Spain");
console.log(thirdObject);



//                                                            Another Way
let system1 = {
  brand : "apple",
  price : 200000,
  operatingSystem : function(os){
    return `This laptop is of brand ${this.brand} and of price ${this.price} and operating system is ${os}`;
  }
};
let system2 = Object.create(system1);
system2.brand = "windows";
system2.price = "80000"

let system3 = Object.create(system1);
system3.brand = "google";
system3.price = "125000";

let o1 = system1.operatingSystem("macOS");
console.log(o1);

let o2 = system2.operatingSystem("windows");
console.log(o2);

let l3 = system3.operatingSystem("chromeOS");
console.log(l3);


//                                                  Prototypal Inheritance (Another way)

// let obj  = new Object({
//   name : "Shikhil"
// });
// console.log(obj);

let object1 = {
  name : "Rane",
  getName : function(){
    return this.name
  },
  getRoll : function(){
    return object2.rollno
  },
  getClass : function(){
    return object3.class
  }
}
console.log(object1);
console.log(object1.getName());

let object2 = {
  rollno : 1,
  __proto__ : object1
}

console.log(object2);
console.log(object2.name);
console.log(object1.getRoll());

let object3 = {
  class : "MCA",
  __proto__ : object2
}
console.log(object3);
console.log(object1.getClass());

//                                                                Strict Mode
function myFunc() {
  "use strict"        // Used strict so that it wont access window as global object
  console.log(this)
}
myFunc()



//                                                             Practice Examples
let person = {
  firstName: "SKR",
  age: 28,
  about: function (city) {
    return `First name of the person is ${this.firstName} and age is ${this.age} of ${city}`;
  }
}

let person1 = {
  firstName: "ABC",
  age: 30,
  __proto__: person
}

let person2 = {
  firstName: "XYZ",
  age: 32,
  __proto__: person
}

let person3 = Object.create(person);
person3.firstName = "LMN";
person3.age = 34;

console.log(person.about("Mumbai"));
console.log(person1.about("Pune"));
console.log(person2.about("Bengaluru"));
console.log(person3.about("Hyderabad"));




let ob1 = {
  name: "Rane",
  getName: function () {
    return this.name;
  },
  getCity: function () {
    return ob2.city
  },
  getAge: function () {
    return ob3.age
  }
}

let ob2 = {
  city: "Mumbai",
  __proto__: ob1
}

let ob3 = {
  age: 28,
  __proto__: ob2
}

console.log(ob1.getName());
console.log(ob1.getCity());
console.log(ob1.getAge());

console.log(ob2.getName())
console.log(ob2.getCity());
console.log(ob2.getAge());

console.log(ob3.getName())
console.log(ob3.getCity());
console.log(ob3.getAge());