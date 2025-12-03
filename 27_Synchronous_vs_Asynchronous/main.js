// JavaScript is single-threaded and synchronous in nature
// It means JS has single callstack and perform single task at a time

// Synchronous code : the code that executes at same time that code will be called as synchronus code OR the code which you written is executing at 
//                    same time when flow of execution reach to that line and doesn't let you wait
// Example :
console.log("Hi");
console.log("Shikhil");
console.log("Rane");

// Blocking : 
console.log("Start");
    // In synchronous code, here if there is something that take certain time to execute then further code need to wait until this line of code execute. So, console.log("log"); will wait for this line of code to execute first and as this code executes then console.log("log"); will execute Synchronous operations that halt the rest of the code until they finish. (Agar backend se data aane me time lg rha he to us time ke between hone wala time blocking hota he)
console.log("End");
// So to overcome this situaltion, JS introduced Event Loop which allows asynchronous code to run separately without blocking the main thread.


// Event Loop : 
// The Event Loop works with the following key components:

// 1. Call Stack:
//    - Whenever a function is called, it is pushed (added) to the call stack.
//    - When the function finishes executing, it is popped (removed) from the stack.
//    - JavaScript runs all synchronous code using this call stack.

// 2. Web APIs (Browser):
//    - Asynchronous functions like setTimeout, fetch, DOM events, etc., are handled by the browser (or environment like Node.js).
//    - These do not run in the call stack directly. They are managed by Web APIs and scheduled for later.

// 3. Callback Queue (Task Queue):
//    - Once an asynchronous operation completes, its callback is sent to the callback queue.
//    - This queue holds callbacks waiting to be executed.

// 4. Event Loop:
//    - Constantly checks if the call stack is empty.
//    - If it is, and there's a callback in the queue, the Event Loop moves that callback to the call stack to be executed.
//    - This ensures asynchronous callbacks run only after all current synchronous code has finished.
//    - This doesn't block synchronous code from executing.


// Asynchronous code: the code that does not execute immediately when the flow of execution reaches it.
//                    Instead, it is scheduled to run later (in the background), allowing the rest of the code to continue running.
//                    It doesn't block the execution of the code that follows.
// Example : 
console.log("Hi");
setTimeout(() => {
  console.log("This is asynchronous");
}, 2000); // This will run after 2 seconds
console.log("Shikhil");
// In this case, setTimeout will run after 2 seconds or 2000 miliSeconds but it is not compulsory that it definetely will run after 2000mS because JavaScript is single-threaded and the execution of setTimeout depends on the event loop and the call stack being clear at that moment.

/*
    execution :  
        1. console.log("Hi"); will come into call stack and executes/print the code and gets poped out of call stack. (Synchronous code).
        2. setTimeout() will come in callstack then this code will be pushed to browser/web api and gets poped out of the call stack
        3. console.log("Shikhil"); will come into call stack and executes/print the code and gets poped out of call stack (Synchronous code).
        2.1 and setTimeout() (asynchronous code) will wait for the 2000 milliSeconds in web Api after 2000 mS gets completed then this will be pushed to callback queue and event loop will check if call stack is empty or not, if empty then event loop will push it in call stack but if call stack is not empty then setTimeout() will have to wait more in callback queue to complete other synchronous code to get completed and as soon as event loop notice that call stack is empty then it will push asynchronous code to call stack for execution 

        Asynchronous code working : setTimeout() => Call stack => web Api => callback queue => callstack

                                                 ┌─────────────────────┐
                                                 │    setTimeout()     │
                                                 └────────┬────────────┘
                                                          ↓
                                                 ┌─────────────────────┐
                                                 │     Call Stack      │  (executes setTimeout and passes it to Web API)
                                                 └────────┬────────────┘
                                                          ↓
                                                 ┌─────────────────────┐
                                                 │      Web API        │  (timer counts 2000ms)
                                                 └────────┬────────────┘
                                                          ↓ (after 2s)
                                                 ┌─────────────────────┐
                                                 │   Callback Queue    │  (callback is ready)
                                                 └────────┬────────────┘
                                                          ↓ (when call stack is empty)
                                                 ┌─────────────────────┐
                                                 │     Call Stack      │  (callback is pushed and executed)
                                                 └─────────────────────┘

*/