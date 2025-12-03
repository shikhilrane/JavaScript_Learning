//                                          *************************** Conditionals *******************************

/*
                1. there are 3 types of conditional statements
                  a. if statement
                  b. if else statement
                  c. if - elseif - else statement
                2. conditional statements are used to perfrom different actions based on different conditions
*/


const prompt = require('prompt-sync')(); //The prompt-sync module is a function that creates prompting functions to run in terminal
/*
    steps to configure prompt command in js
      i. put command npm init -y in console.
      ii. put command npm install prompt-sync in console.
      iii. put "const prompt = require('prompt-sync')();" command on top of js file.

                      OR 

    if we want to run this more easily this command then create separate .html file and then link out .js file with that .html file then take o/p on browser
*/


                                                          // a. if statement
// if statement evaluates condition inside (). If condition satisfy, the code inside if will execute, otherwise code won't execute
let age = parseFloat(prompt("enter your age for if statement : "));
if (age>=18) {
  console.log("you are adult");
}


                                                      // b. if else statement
// This statement have optional else clause. If condition satisfied, then code inside if will be executed otherwise else block will be executed
let age2 = parseFloat(prompt("enter your age for if-else statement : "));
if (age2>=18) {
  console.log("you can vote now as your age is 18 or above");
} else {
  console.log("you can not vote as you are below 18");
}


                                                  // c. if - elseif - else statement
// sometimes we want to keep rechecking set of conditions one by one until one matches, we use if-elseif-else statement for that
let age3 = parseInt(prompt("enter your age for if-elseif-else statement : "));
if (age3<=5) {
  console.log("you are toddler");
}
else if ((age3>5)&&(age3<=12)) {
  console.log("you are kid");
}
else if ((age3>12)&&(age3<18)) {
  console.log("you are teen");
}
else {
  console.log("you are adult");
}