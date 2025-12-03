//                                              Type conversion and type coersion
//                                         ------------------------------------------


/* 
    1. It is used to convert type of data to another tyoe of data
    2. Number to string, boolean to string, string to number, boolean to number, string to boolean, number to boolean
    3. typeof keyword is used to check type of the data
    4. only number, string and boolean conversion takes places
    5. there are basically two types of conversion a.Automatic Conversion(coersion) and b. Manual Conversion
    6. there are 2 types of conversions 1. Automatic Conversion(coersion) & 2. Manual Conversion, both the conversions happens between string(); number(); and boolean();
*/

//                      a. Automatic Conversion (Coersion)
// First case
let a = 5 + null;
console.log(a);
console.log(typeof a); //JS consider null as 0 thats why it finaly shows as number

// Second case
let b = "5" + null;
console.log(b);
console.log(typeof b); //JS concanicated string 5 with null js convert null into string. + is use to concanicate string and addition

// Third case
let c = "5" - 2;
console.log(c);
console.log(typeof c); //JS will consider string as a number if we use -, *, /, % signs in out expression

// fourth case
let d = "5" - "null"
console.log(d);
console.log(typeof d); //while using -, /, * operators, if any of them is not a number, then it will show NaN 
/*
    notes :- 
    1. + operator is used for addition and for string concatination
    2. -, *, /, % operators are used to perform their particular operations
    3. null has value of 0
    4. while using -, /, *, o/p will be always NaN if all expressions are string
*/





//                      b. Manual Conversion

// I. string();
// II. number();
// III. boolean();


// I. String();

// i. number to string
let e = 5;
console.log(e);
console.log(typeof e);
let f = String (e);
console.log(f);
console.log(typeof f);

// ii. boolean to string
let g = true;
console.log(g);
console.log(typeof g);
let h = String(g);
console.log(h);
console.log(typeof h);

// II. number

// i. String to number
let i = "god";
console.log(i);
console.log(typeof i);
let j = Number(i);
console.log(j);
console.log(typeof j);

// ii. boolean to number
let k = true;
console.log(k);
console.log(typeof k);
let l = Number(k)
console.log(l);
console.log(typeof l);

// III. Boolean 

// i. String to boolean
let m = "god";
console.log(m);
console.log(typeof m);
let n = Boolean(m);
console.log(n);
console.log(typeof n);

// ii. number to string
let o = 5;
console.log(o);
console.log(typeof o);
let p = Boolean (o);
console.log(p);
console.log(typeof p);


/*
 Note :- we can even convert date and array to string, number and boolean
*/

// Functions to use in numbers

// i. parseInt() (it will only give the integer)
let q = parseInt ("44.3");
console.log(q);

// ii. parsFloat() (it will give the float)
let r = parseFloat ("44.4");
console.log(r);

// iii. .toFixed() (it will give number of floating points we provide)
let s = 34.222;
console.log(s.toFixed(10));