//                                                          JavaScript Working
//                                                -------------------------------------

/* 
        JS is Interpreted, Single-threaded and synchronus in basic nature
        1. Interpreted :- code check done line by line
        2. Single-threaded :- It has only one call stack which performs only one task at a time
        3. Synchronus :- It means every task perform in sequence i.e. every statement has to wait for earlier statement to get executed
*/

console.log("1");           // this will get executed first in call stack

setTimeout(() => {          // this will get executed third in call stack as this is web api, so it will wait for the give time in web api & as it 
    console.log("2")        // completed the given time in web api then console.log("2"); will comes in callback queue & event look will check if
}, 1000);                      // callstack is empty if it found empty then it will push console.log("2"); into callstack from callback queue.

console.log("3");           // this will get executed second in call stack


setTimeout(() => {
    console.log("4");
}, 4000);

/*
    1. We can directly run JS  on browser
    2. every browser has VS engine to run JS like chrome has v8 engine and mozilla firefox has spidermonkey
    3. and that JS Enginer is itself an interpreter
*/