//                                          Immediately Invoke Function Expression (IIFE)
//                 1. IIFE is a function in JS that invoke/runs as soon as it defined
//                 2. It is also known as self-executing anonymous function. We dont have to name function as this is anonymous function
//                 3. Scope is limited to that particular function 
//                 4. It avoid Global Scope Pollution
//                 5. it includes two round brackets, 1st bracket contain anonymous function and 2nd bracket is for execution
//                 6. syntax :- (function () {
//                                  // …
//                              })();

// 1. anonymous IIFE function
    // 1.1 anonmous function
    (function(){
        console.log(4+5);
    })();

    // 1.2. anonymous IIFE function with parameters and arguments
    (function(a,b){
        console.log(a+b);
    })(4,15);

    // 1.3 anonymous iife function with return value
    let ifwrv = (function (a,b){
        return `${a} is number & ${b} is text`
    })(4,"hello")
    console.log(ifwrv);

// 2. IIFE is anonymous function but still it executes with function name
    // 2.1 iife with function name
    (function iifeFunction() {
        console.log(4)
    })();

    // 2.2 IIFE is anonymous function but still it executes with function name, parameters and arguments
    (function iifeFunction(a,b) {
        console.log(a,b)
    })("Web","developer");

    // 2.3 IIFE with return value (when we can to return something then we have to store that IIFE's first bracket in variable)
    let abc = (function fafsfdrgs (a){
        return a
    })(true);
    console.log(abc);

// 3. IIFE with expression type of function
    // 3.1 IIFE with expression type of function  
    let iifeWithExpre = (function (){
        console.log(3.1);
    })();

    // 3.2 IIFE with expression type of function with parameter and argumetns
    let iifeWithExpreWithpara = (function (a,b){
        console.log(a*b);
    })(4,7);

    // 3.3 IIFE with expression type of function with return
    let iifeWithExpRet = (function(a,b){
        return a/b;
    })(10,7)
    console.log(iifeWithExpRet);

// 4. IIFE with arrow function
    // 4.1 IIFE with arrow function
    (() => {
        console.log("4th type");
    })();

    // 4.2 IIFE with arrow function with parameters and arguments
    ((a,b) => {
        console.log(a,b);
    })(10,20);

    //4.3 IIFE arrow function with return value (when we can to return something then we have to store that IIFE's first bracket in variable)
    let aroWithRet = ((a,b) => {
        return a + b
    })(10,20);
    console.log(aroWithRet);

// 5. IIFE with implicit arrow function
    // 5.1 IIFE with implicit arrow function
    (() => console.log("hello there"))();

    // 5.2. IIFE with implicit arrow function with parameters and arguments
    ((a,b) => console.log(a,b))(87,96);

    // 5.3 IIFE arrow function with return value (when we can to return something then we have to store that IIFE's first bracket in variable)
    let afwv = ((n) => n)("Number 5");
    console.log(afwv);

// IIFE with async (we will see async later)
// 10. 
(async () => {
    console.log("5th type");
})();

// 11. 
(async (a,b) => {
    console.log(a-b);
})(654,276);