//                                                         A. call()
//                          1. With the call() method, you can write a method that can be used on different objects.
//                          2. by using call() method, we can fetch value from multiple object through single function
//                          3. arrow function cant be used to fetch value, as arrow function doesn't have access of 'this' keyword


let car1 = {
  name : "Audi",
  manufucturing_year : 2023,
  color : "black"
}

let car2 = {
  name : "BMW",
  manufucturing_year : 2024,
  color : "Sapphire Blue"
}
  
let car3 = {
  name : "Mercedes-Benz",
  manufucturing_year : 2022,
  color : "grey"
}
  
let carCall = function (cc,gear) {
  console.log(`this is ${this.name}, it is manufactured in ${this.manufucturing_year} with color ${this.color} and has ${cc} of power with ${gear} gears transmission`);
}
  
carCall.call(car1, 3000, 7);
carCall.call(car2, 2950,8);
carCall.call(car3, 3100,6);
  
// EXAMPLE NO. 2 (with return keyword)
let obj1 = {
  name : "Shikhil",
  age : 27
}
let itObj = function () {
  return (`name of the candidate is ${this.name} and age of the candidate is ${this.age}`);
}
let firstObj = itObj.call(obj1);
console.log(firstObj);

  
//                                                         B. apply()
//                          1. apply() method is similar to call() method but difference is we provide arguments in an arraylist
  
carCall.apply(car1,[3000,7])
  
  
//                                                         C. bind()
//                          1. bind() is similar to call() as well 
//                          2. difference is, bind() creates a copy that we can use later as well
let exeCarBind = carCall.bind(car1,3000,7);
console.log(exeCarBind);
exeCarBind()        // this is the copy that we can even use later

// this keyword with bind
let user1 = {
  fullName : "ABCXYZ",
  age : 0/0,
  about : function () {
    console.log(`Full name is ${this.fullName} and age is ${this.age}`);
  }
}

// let exeAbout = user1.about();  (here it will show undefined, because when we extract function from object and store it in variable then its current execution context will be change according to where we have placed it, it will show value of this as undefined)
// console.log(exeAbout)

let exeAboutBind = user1.about.bind(user1);   // It will bind current context of the function from where it is extract.
exeAboutBind();