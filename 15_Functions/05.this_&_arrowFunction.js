//                                                    this and Arrow function

//                                                          A. this
//  1. The this keyword refers to the current object in a method or constructor. 
//  2. this keyword used in object. It strictly use to show current context of only OBJECT.
//  3. this keyword is used when we want to call key in a method but only when tht key is present in same object with that mehod
//  4. we do not use this keyword to call keyword from from different object
//  5. this keyword in Node envt doesn't show anything in global scope because it doesn't have anything to show on current context. 
//  6. But in browser, this keyword will show objects.

let obj = {
    fName : "Shikhil",
    profession : "Web D",
    insideFunction : function () {
        console.log(`${this.fName} (${obj2.age}) is ${this.profession} is logged in from ${obj2.location} `);
//                         ^              ^                 ^                                   ^
//           fname is from its     age is from other      profession is from its        location is from other
//           parent object thats   object thats why we    parent object thats           object thats why we
//           why we use this       traditionl method      why we use this               traditionl method
        console.log(this);  // <= this shows current object as an o/p
    }
}

let obj2 = {
    age : 27,
    location : "India"
}

obj.insideFunction();
console.log(this);      // <= this will show empty object cause when we use this it doesnt have any object to show but when when we use this in browser console without any object then it will show window as an object cause window is global object in a browser



//                                                          B. Arrow Function
//                                  1. arrow function is the another way to type a function
//                                  2. there are 2 ways to write arrow function
//                                     a. normal arrow function
//                                     b. implicit arrow function

// a. normal arrow function
let aFunc = (a,b) => {
    console.log("this is arrow function");
    return a + b;
}
console.log(aFunc(5,8));

// b. implicit arrow function
let bFunc = (a,b) => (a+b)  // we dont have to give curly braces as well as return keyword just put operation inside ()
console.log(bFunc(4,28));

const wishlist = (...args) => {
    console.log(args);
    console.log(args.length);
    console.log(args[2]);
    return args;
};
let exeWishlist = wishlist(3, 4, 6, 8, 8, 3, 5, 7);
console.log(exeWishlist);


// +++++++++++++++++++++++++++++++++++++++ this keyword in normal function VS arrow function +++++++++++++++++++++++++++++++++++++++ //

// 1. normal function with this keyword
function norFunc() {
    console.log(this);
}
norFunc();     // it will show o/p as global object

// 2. arrow function with this keyword
let arrowFun = () => {
    console.log(this);
}
arrowFun();     // it will show o/p as empty object cause arrow function treat this keyword as 

