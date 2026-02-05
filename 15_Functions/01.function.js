//                                              ************ 3. Functions *************

/*
                                a. JavaScript function is a block of code
                                b. JavaScript function can be run as many as times
                                c. JavaScript function 
*/

// 1. Basic Function (function without parameter, arguments and return)
    // this is basic syntax of function where we have not took parameter, arguments or return
function firstFunc() {
    console.log("hello");
    console.log("how are you");
    console.log("great");
}
firstFunc();


// 2. function with return value (we use return statement where it will return final value to user )
function passMessage() {
    return "hey there im passing message";
}
let passMessageStored = passMessage();
console.log(passMessageStored);
console.log(passMessageStored + ", is it done?");


// 3. function with parameters, arguments and return
    // 3.1 parameters and arguments as a string
        // 3.1.1 when user passes all the the arguments
                            //   these are parameters
                            //      v         v  
        function customSentence(firstWord,secondWord) {
            return "hey there which " + firstWord + " you are using these days with how much " + secondWord
        }
                                        //          these are the arguments
                                        //              v           v
        let sentenceOfCustomisation = customSentence("tablet", "storage");      //this is how we store return value in variable
        let sentenceOfCustomisationForWithDiffArgument = customSentence("phone", "RAM");
        console.log(sentenceOfCustomisation);       // this is how we print variable in which return value of function is stored
        console.log(sentenceOfCustomisationForWithDiffArgument);

        // 3.1.2 when user does not passes all the the arguments
        function customSentence2(word1,word2) {
            if (word1==undefined) {                     //  if user doesnt enter argument for parameter then we this technique to ask for argument
                console.log("please enter for word 1"); 
                return;          // if this loop runs then function will stop at after printing above statement
            }
            if (word2==undefined) {
                console.log("please enter for word 2");
                return;
            }
            return "hey there " + word1 + " how are you doing " + word2;
            
        }
        let greetingIs = customSentence2("Shikhil");
        console.log(greetingIs);

        // 3.1.3 when user does not passes all the the arguments but we set default value in parameters
        function customSentence3(fName,lName="Rane") {          // this is another way by giving default to parameter directly
            return "hello " + fName + " is your lastname " + lName + " ?"
        }
        let flName = customSentence3("Shikhil")
        console.log(flName);

    // 3.2 parameters as a Numbers
        // 3.2.1 when user passes all the the arguments
        function sum(a,b,c) {
            let addition = a+b+c;
            let multiplication = a*b*c
            return "the sum of given number is " + addition + " and multiplication is " + multiplication;
        }
        let addNum = sum(2,5,7);
        let addNum2 = sum(4,9,5);
        console.log(addNum);
        console.log(addNum2);

        // 3.2.2 when user does not passes all the the arguments
        function Summ(x,y,z) {
            if (x==undefined) {
                console.log("please enter value of x");
                return;
            }
            if (y==undefined) {
                console.log("please enter value of y");
                return;
            }
            if (z==undefined) {
                console.log("please enter value of z");
                return;
            }
            let summation = x+y+z;
            return summation;
        }
        let summFunc = Summ(4)
        console.log(summFunc);

        // 3.2.3 when user does not passes all the the arguments but we set default value in parameters
        function summm(m=2,n=3,o=4) {
            let addSummm = m+n+o;
            return addSummm;
        }
        let summm3_2_3 = summm();
        console.log(summm3_2_3);


// 4. function when user keep passing values which like in shopping cart of ecommerce website
    // 4.1 taking multiple values (there are 2 ways)
        // 4.1.1 this is a way we write when number of parameters are not known
        function cart(...val) {     // (... is a rest operator, by using rest operator we can function where no. of parameters are not known)
            return val;
        }
        let shoppingCart = cart(2000, 2577, 2346, 3435, 3453, 3454);
        console.log(shoppingCart);

        // 4.1.2 this is another way we write when number of parameters are not known (where first few parameters we define later we use rest operator to store unknown no. of parameters)
        function cart2(val1,val2,...val) {
            return val;
        }
        let shoppingCart2 = cart2(2000, 2577, 2346, 3435, 3453, 3454);
        console.log(shoppingCart2); // (in o/p => first two values i.e. 2000 & 2577 will be stored in val1 and val2 respectively and other remaining   values will be stored in val after rest operator)

        // 4.1.3 another way to take multiple parameters (we use arguments keyword here to take arguments as many as possible)
        function wishlist() {
            console.log(arguments);     // this is how we show we can see which arguments user entered
            console.log(arguments.length);      // this is how we can identify length of arguments entered by user
            console.log(arguments[2]);      // this is how we can we can access particular number of value entered by user
        }
        wishlist();
        let returnWishlist = wishlist(543, 456, 243, 769, 546, 325, 647);
        console.log(returnWishlist);

        // 4.1.4 another way to take arguments. it returns o/p as an Object
        function anotherWishlistObj() {
            return arguments
        }
        let anotherWishlistPrintObj = anotherWishlistObj(5,3,4,87,5,8);
        console.log(anotherWishlistPrintObj);

        // 4.1.5 another way to take arguments. it returns o/p as an array (it return array as we pass ...args as a parameter & return args. so, if we return or print same variable & same vairable with spread operator(i.e. ...) as parameter then it will always return as a array. here, parameter = ...args & return value = args)
        function anotherWishlist(...args) {
            return args
        }
        let anotherWishlistPrint = anotherWishlist(5,3,4,87,5,8);
        console.log(anotherWishlistPrint);


    // 4.2 Function with unknown numbers of parameters
        // 4.2.1 this is how we calculate unknown numbers
        function cart3(val1,val2,...val) {   
            console.log(val);
            console.log(arguments);
            console.log(arguments.length);
            let sum = 0;
            for (let i = 0; i < arguments.length; i++) {    // (we use arguments to address unknown numbers of parameters & here .length is used to tell loop that, iteration will take place till length of the unknown numbers of parameters)
                sum = sum + arguments[i]    // (arguments[i] is use to add next number from parameters)
            }
            return sum;
        }
        let shoppingCart3 = cart3(2000, 2577, 2346, 3435, 3453, 3454);
        console.log(shoppingCart3);

        //  4.2.2 another way to calculate unknown numbers
        function sumOfUnkownNoOfPara() {
            console.log(arguments);
            console.log(arguments.length);
            let addn = 0;
            for (let i = 0; i < arguments.length; i++) {
                addn = addn + arguments[i];
                /*
                0 = 0 + 1[0]
                1 = 1 + 2[1]
                3 = 3 + 3[2]
                6 = 6 + 4[3]
                10
                */
            }
            return addn
        }
        let addition = sumOfUnkownNoOfPara(1,2,3,4);
        console.log(addition);


// 5. function with object

let user = {
    username : "Shikhil",
    age : 26
}
function objFunction(userObject) {
    return "user name is " + userObject.username + " & user's age is " + userObject.age;
                //                    ^                                        ^
                //      this is how we target keys of object by function parameter (i.e. parameter.objectKey)
}
let objFun = objFunction(user);     //      this is how we target object by function (i.e. function(object))
console.log(objFun);


// 6. function with arrays
    // 6.1 iterate array value through function
    let newArray = [200,440,644,684];
    function arrFunction(getArray) {
        return getArray[2];             // this is how we address index of array by using function (i.e. parameter[index])
    }
    let arrFun = arrFunction(newArray); // this is how we access array by using function (i.e. function(array))
    console.log(arrFun);

    // 6.2 addtion of array through function
    let myMarks1 = [47,48,43,46,49]
    let myMarks2 = [97,98,93,96,99];
    function funArrAdd(arr){
        sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum = sum + arr[i]
        }
        return sum
    }
    let functionWithArrayAdd1 = funArrAdd(myMarks1);
    console.log(functionWithArrayAdd1);
    let functionWithArrayAdd2 = funArrAdd(myMarks2);
    console.log(functionWithArrayAdd2);

    // 2nd way with multiple arrays
    let laptop1 = [2019,2020,2021,2022];
    let laptop2 = [2019,2020,2021,2022,2023,2024];
    function accLaptop(laptopObj) {
        let sum = 0;
        for (let i = 0; i < laptopObj.length; i++) {
            sum = sum + laptopObj[i];
        }
        return sum;
    }
    let l1 = accLaptop(laptop1);
    console.log(l1);
    let l2 = accLaptop(laptop2);
    console.log(l2);

    // 6.3 multiplication of array through function
    let myFriendsMarks = [47,48,43,46,49]
    function funArrMul(){
        mul = 1;
        for (let i = 0; i < myFriendsMarks.length; i++) { 
            mul = mul * myFriendsMarks[i]
        }
        return mul
    }
    let functionWithArrayMul = funArrMul(myFriendsMarks);
    console.log(functionWithArrayMul);


// 7. expression type of function. we store this type of function in a variable 
// (function which is stored in variable called expression type of function)
let expFunc = function (num) {
    return num + 2
}
let resultExpFunc = expFunc(14);
console.log(resultExpFunc);

// 8. Arrow function
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

/*
                                                ****** Summary of topics ******
        1. Basic Function (function without parameter, arguments and return)
        2. function with return value (we use return statement where it will return final value to user )
        3. function with parameters, arguments and return
            3.1 parameters and arguments as a string
                3.1.1 when user passes all the the arguments
                3.1.2 when user does not passes all the the arguments
                3.1.3 when user does not passes all the the arguments but we set default value in parameters
            3.2 parameters as a Numbers
                3.2.1 when user passes all the the arguments
                3.2.2 when user does not passes all the the arguments
                3.2.3 when user does not passes all the the arguments but we set default value in parameters
        4. function when user keep passing values which like in shopping cart of ecommerce website
            4.1 taking multiple values (there are 2 ways)
                4.1.1 this is a way we write when number of parameters are not known
                4.1.2 this is another way we write when number of parameters are not known (where first few parameters we define later we use rest operator to store unknown no. of parameters)
                4.1.3 another way to take multiple parameters 
            4.2 Function with unknown numbers of parameters
                4.2.1 this is how we calculate unknown numbers
                4.2.2 another way to calculate unknown numbers
        5. function with object
        6. function with arrays
            6.1 iterate array value through function
            6.2 addtion of array through function
            6.3 multiplication of array through function
        7. expression type of function
        8. arrow function
*/

// ------------------------------------------------------------------------------------------------------------------------------------------------

//                                                     Default Parameters

// normal functions
function f1(a) {
    console.log(a);
}
f1(1);

// function without argument pass
function f2(a) {
    console.log(a);
}
f2();
//  function with default parameter
function f3(a=3) {
    console.log(a);
}
f3();

// function with only single argument passed to first and for second as default parameter
function f4(a,b=5) {
    console.log(a, b);
}
f4(4);

// function will overwrite first default parameter if there are two parameter in fucntion and we pass argument when calling function and second will be undefined
function f5(a=6,b) {
    console.log(a, b);
}
f5(7);

// function with both parameter passed as default parameter
function f6(a=8,b=9) {
    console.log(a, b);
}
f6();

// function with both parameter passed as dafault parameter and pass argument when calling an function (argument will overwrite default parameters)
function f7(a=8,b=9) {
    console.log(a, b);
}
f7(10, 11);

// function in which we can pass null as a default parameter
function f8(a) {
    console.log(a);
}
f8(null);

// function in which we can pass undefined as a default parameter
function f9(a) {
    console.log(a);
}
f9(undefined);

// function in which we can pass object as a default parameter
function objFunc(obj = {age:15, wt:90, ht:190}) {
    console.log(obj);
}
objFunc();

// function in which we can pass array as a default parameter
function arrFunc(arr = [1,2,3,4,"Shikhil"]) {
    console.log(arr);
}
arrFunc();

// function in which we can give function as a default parameter
function getAge() {
    return 190
}
function utility(name,age){
    console.log(name,age);
}
utility("S", getAge());