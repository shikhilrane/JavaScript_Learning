//                                                             Operators
//                                              -------------------------------------

/*
    1. It is a special symbol used to perform operations on operand
    2. e.g.     a       +       b       =       c
                ^       ^       ^       ^       ^
            operand operator operand operator operand
    3. there can be multiple operator and operand in single statement
    4. Operators are as follows
        a. Unary operators
        b. Shift operators
        c. Arithmetic operators
        d. Assignment operators
        e. Comparison or Relational Operators
        f. Bitwise Operators
        g. Logical Operators
        h. Ternary operators
*/

//                                              -------------------------------------

//      a. Unary Operators
/*
    It means just operand with two opertor
    there are two types of operators i.increment and ii.decrement and each one have 2 variations i.e. prefix and postfix
*/
// i. Increment Operator
let a = 4;
console.log(a++); //postfix
console.log(a);
console.log(++a); //prefix
console.log(a);
// ii. decrement operator
let b = 5;
console.log(b--);
console.log(b);
console.log(--b);
console.log(b--);


//      b. Shift Operators
/*
    there are two types of shift operators
    i. left shift operators (<<)
    ii. right shift operators (>>)
*/
// i. Left Shift operators(<<)
// refer notes in books for deep explaination
let c = 4; // this is the value which we want to shift
let d = 6; // 'c' will be multiply with specified value of 'd' ths t will be in bits. =c*d =4*6 =4*64 =256
console.log(c<<d); 
// c = 0000 0000 0000 0000 0000 0000 0000 0100
// Shift left by 6 digits as d=6
// so, (c<<d) = 0000 0000 0000 0000 0000 0001 0000 0000 = 256
// i. Right Shift operators(<<)
// refer notes in books for deep explaination
let e = 8; // this is the value which we want to shift
let f = 3; // 'e' will be divide with specified value of 'f' ths t will be in bits =e/b =8/3 =8/8 =1
console.log(e>>f); 
// e = 0000 0000 0000 0000 0000 0000 0000 1000
// Shift right by 3 digits as f=3
// so, (e>>f) = 0000 0000 0000 0000 0000 0000 0000 0001 = 1
let g = 8;
let h = 4;
console.log(g>>h); //here o/p got to 0 cause value of 4 in bits is more than 8 i.e. 16
// g = 0000 0000 0000 0000 0000 0000 0000 1000
// Shift right by 4 digits as h=4
// so, (g>>h) = 0000 0000 0000 0000 0000 0000 0000 0000 = 0

//      c. Arithematic Operators
console.log(8+2); // addition
console.log(8-2); // substraction
console.log(8*2); // multiplication
console.log(8/2); // division
console.log(8**2); // exponential
console.log(8%2); // modulus
console.log(a++, ++a); // unary increment
console.log(b--, --b); // unary derement

//      d. Assignment Operators
let i = 5;
let j = 4;
console.log(i+=j);  // i = i + j
console.log(i-=j);  // i = i - j
console.log(i*=j);  // i = i * j
console.log(i/=j);  // i = i / j
console.log(i%=j);  // i = i % j
console.log(i**=j); // i = i ** j
console.log(i=j);

//      e. Comparison Operator or Relational Operator
let k = 5;
let l = 6;
console.log(k==l); // its true if, rhs=lhs
console.log(k===l); // its true if, rhs=lhs and both operands are of same type
console.log(k!=l); // it turn true if, lhs is not equals to rhs
console.log(k!==l); // nor equals to neither of same data type
console.log(k>l); // greater than
console.log(k<l); // less than
console.log(k>=l); // greater than equals to
console.log(k<=l); // less than equals to

//      f. Bitwise Operator
/* 
    it compares from bit to bit 
    bitwise operator treat its operand in 32 bit binary digit
    there are foloowing type of bitwise operators
        i. Bitwise AND (&)
        ii. Bitwise OR (|)
        iii. Bitwise XOR (^)
        iv. Bitwise NOT (~)
        v. Left-shift (<<)
        vi. Right-shift (>>)
        vii. Zerofill RIght shift (>>>)
*/

//      i. Bitwise AND (&) (it works according to AND table)
let m = 5; //00000101                   0101   <----- Binary of 5   
let n = 6; //00000110                 & 0110   <----- Binary of 6
console.log(m&n); //00000100            0100   <----- Binary of 4 (AND table returns 1 on when both digits are 1)

//      ii. Bitwise OR (|) (it works according to OR table)
let o = 5; //00000101                   0101   <----- Binary of 5   
let p = 6; //00000110                 | 0110   <----- Binary of 6
console.log(o|p); //00000111            0111   <----- Binary of 7 (OR table returns 0 on when both digits are 0)

//      iii. Bitwise XOR (^) (it works according to XOR table)
let q = 5; //00000101                   0101   <----- Binary of 5   
let r = 6; //00000110                 ^ 0110   <----- Binary of 6
console.log(o^p); //00000011            0011   <----- Binary of 3 (XOR table returns 0 on when both digits are equal)

//      iv. Bitwise NOT (~) (it works according to NOT table)
let s = 5;       
console.log(~s); // ie 5 = 0101 and ~5 = 1010 which is binary of 10 but the answer is -6 cause, it consider 32 bit of 5 using bitwise NOT, all the binary number gets inverted & we get -6 (32-bit of 5 means 0000 0000 0000 0000 0000 0000 0000 0101 and -6 is 1111 1111 1111 1111 1111 1111 1111 1010)



//      g. Logical Operator
/*
    it uses for validation
    three types of logical operator
        i. Logical AND (&&)
        ii. Logical OR (||)
        iii. Logical NOT (!)
*/
//      i. Logical AND (&&) (if any of the condition is false it will return false)
let t = (5>2); //true
let u = (5>3); //true
console.log(t&&u); //true

//      ii. Logical OR (||) (if any of the condition is true it will return true)
let v = (5<2); //false
let w = (5<3); //false
console.log(v||w); //false

//      iii. Logical NOT (!) (if the condition is false it will return true and vise-versa)
let x = (5>2); //true
console.log(!x); //false


//      h. Ternary Operator
// Traditional way
let age = 19;
if (age>=18) {
    console.log("Yes");
}
else {
    console.log("No");
}
// by using ternary operator
let agee = 19;
let drive = agee>=18 ? "Yes" : "No";
console.log(drive);

//      i. Null Coalescing operator (??), (null,undefined)
// it is used to avoid null and undefined values
// when we get data from data base & if data come with null or undefined ,then to avoid further operations getting interrupt, we asssign them some values

let val1;

val1 = 5 ?? 10;
console.log(val1);

val1 = null ?? 10;
console.log(val1);

val1 = undefined ?? 15;
console.log(val1);

val1 = null ?? undefined ?? 15 ?? 20
console.log(val1);

// *NOTE* :- it actually assign first hard value 