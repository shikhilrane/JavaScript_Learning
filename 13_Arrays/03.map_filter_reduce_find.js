//                                                         map, filter & reduce
/* 
                                1. these are also called as higher order arrays
                                2. map, filter & reduce does not change original array but creates new array
                                3. there uses callback functions, functions who return itself so we dont have to name that function
*/

                                                    // 1. map()
let arr = [54,23,65,76,43,76];

// Normal map
let newArr = arr.map(function (value,index,array) {       //index and array are the standard parameter in both .map() & .forEach()
    console.log(value,index,array);
    return value + 1;
})
console.log(newArr);

// Arrow explicit map
let newArr1 = arr.map((n) => {
    return n + 5;
});
console.log(newArr1);

// Arrow implicit map
let newArr2 = arr.map((n) => n + 10);
console.log(newArr2);

/* 
            .forEach() & .map() both are same then what to use, & when
            basically we use .map() when we have to use make new array but doesn't change original array & we use .forEach() when we just have to perform operation that doesnt changes original array
*/
let arr1 = [1,20,3,40,5,60,7,80,9]
let arr1Map = arr1.map((num1,num2) => { // (num1 = value, num2 = index)
    return num1 + num2                  // (value at that index + index)
})
console.log(arr1Map);
/*
    0 + 1   = 1
    1 + 20  = 21
    2 + 3   = 5
    3 + 40  = 43
    4 + 5   = 9
    5 + 60  = 65
    6 + 7   = 13
    7 + 80  = 87
    8 + 9   = 17
*/



                                                    // 2. .filter() 
//                      (it filters the value which passes the condition given within filter function)
//              It is same as forEach() but difference is that .filter() return and forEach() give o/p on console

// normal function
let arr2 = [4,6,8,2,5,1,3,9,7]
let newArray2 = arr2.filter(function (val) {                  // this is callback function thats why we dont name the function
    return val >= 5                                           // values 5 or greater than 5 will be printed
})
console.log(newArray2);

// explicit arrow return
let retArr = arr2.filter((n) => {
    return n%2==0;
})
console.log(retArr);

// implicit arrow return
let retArr1 = arr2.filter((n) => (n>5))
console.log(retArr1);

// other example of filter method 
const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];
let userBooks1 = books.filter((book) => {
    return book.genre==="Science"
})
console.log(userBooks1);

let userBooks2 = books.filter((book) => {
  return (book.genre==="Non-Fiction") && (book.edition>1990);
})
console.log(userBooks2);

// other example of filter method 
let students = [43,64,23,546,65,98,665,"this is string",true,678,435,48,6456, "Shikhil", "Rane"];
let collegeStudents = students.filter((value) => {
    return typeof(value)=='string'
})
console.log(collegeStudents);

                                                    // 3. .reduce() 
//                                 (gives additon of all elements in an array (gives single value))
let arr3 = [1,2,3,5,2,1];
let newArr3 = arr3.reduce(function (accumulator,currValue) {
    console.log(`accumulator is ${accumulator} and current value is ${currValue}`);
    return accumulator + currValue;
},0)
console.log(newArr3);

/*
      basically here,
      we add numbers with each other, at the end of the function we wrote 0. that 0 is an initial accumulator i.e. accumulator + val[0] 0+1=1,
      then result will store in accumulator so, value of accumulator will becomes 1 then loop will add this accumulator value in next value of an array so, accumulator + val[1] 1+2. it happens till last value of an array
      here,
      accumulator + val = updated accumulator
          0       +  1  =        1,
          1       +  2  =        3,
          3       +  3  =        6,
          6       +  5  =        11,
          11      +  2  =        13,
          13      +  1  =        14
*/

// Arrow explicit fucntion
let newArr31 = arr3.reduce((accumulator, currValue) => {
    return accumulator + currValue;
},0);
console.log(newArr31);

// Arrow implicit fucntion
let newArr32 = arr3.reduce((accumulator, currValue) => accumulator + currValue, 0);
console.log(newArr32);

// real life example
const shoppingCart = [
  {
      itemName: "js course",
      price: 2999
  },
  {
      itemName: "py course",
      price: 999
  },
  {
      itemName: "mobile dev course",
      price: 5999
  },
  {
      itemName: "data science course",
      price: 12999
  },
]
const priceToPay = shoppingCart.reduce((acc, item) => {
  return acc + item.price
}, 0)
  
console.log(priceToPay);


//                                                     4. .find() 
//                                .find() is use to find specific entity from the array

let prices = [43,64,23,546,65,98,665,678,435,48,6456];  // unsorted array
let compare = ((a,b) => {                               // to sort the array we created a compare function
    return a-b;                                         // return array ascending order
});
let sortedPrices = prices.sort(compare);                // returned array ascending order
console.log(sortedPrices);                              // got sorted array
console.log(prices);                                    // original array even got sorted

let foundPrice = prices.find((value) => {               // used .find() method
    return value > 400                                  // It will give single value greater than 400
})
console.log(foundPrice);                                // got 435

/*
                                                *** NOTE ***
                1. if we apply .find() method on unsorted array to find number that returned "value > specified number" then it will start to find that number from index 0 and from above array prices (unsorted) if we apply .find() value > 400 then it will return 546 because as it will start finding greater number than 400, it will find 546 on 3rd index and will return it
                2. so to tackle with such situation we sorted the array and then applied (value > 400) so it gave 435
*/


//                                                 5. .findIndex() 
//                              .find() is use to find Index of specific entity from the array
let findIndexArr = sortedPrices.findIndex((val) => {
    return val > 600;
})
console.log(findIndexArr)


//                                                 6. .every()
//                  use to check in array, if every element of array is according to condition of not
let numbers = [2,4,6,8,10];
let ifEvenNumbers = numbers.every((number) => {
    return number%2==0;
})
console.log(ifEvenNumbers)


//                                                 7. .some()
//                  use to check in array, if any element of array is according to condition of not
let numberss = [1,4,5,7,11];
let ifEvenNumberss = numberss.some((number) => {
    return number%2==0;
})
console.log(ifEvenNumberss)


//                                                 8. .fill()
//                  used in array, to fill the random array. It must be constructor type of array
let myArray = new Array(10).fill(0);
console.log(myArray)
    // another use
let myNewArray = [1,2,3,4,5,6,7,8,9];
myNewArray.fill(0,2,5)  // 0 = to tfill with 0, 2 = starting index, 5 = to index (5-1)
console.log(myNewArray)



                                                    // Chaining method 
// a. we can apply multiple functions in a single expression
// b. we can apply as many as functions by using chaining method
// c. syntax :- let variable = array.map().filter().map().map().filter().reduce()...... as many as we want

let array = [1,2,3,4,5,6,7,8,9,10];
let chaining = array
    .map((nums) => {
      return nums * 2           // it will return number multiplied by 2. o/p = [2,  4,  6,  8, 10, 12, 14, 16, 18, 20]
    })
    .map((nums) => {
      return nums + 5           // it will return number with added 5 in upper .map()'s function. o/p = [7,  9, 11, 13, 15, 17, 19, 21, 23, 25]
    })
    .filter((nums) => {
      return nums>10            // it will filter numbers from above function's o/p array. o/p = [11, 13, 15, 17, 19, 21, 23, 25]
    })
    .reduce((num1,num2) => {
      return num1 + num2        // it will add numbers from upper filer function's. o/p = 144
    },0);

console.log(chaining);





//                                                      NOTE :-
// .map(), .filter(), and .reduce() return new values and don't touch the original array.
// .forEach() does not return anything and only changes the original array if you write code to do so.