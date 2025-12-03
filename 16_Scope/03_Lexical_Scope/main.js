//                                                       LEXICAL SCOPE
function outer() {
    let name = "Shikhil";
    function inner() {
        console.log(name); // ✅ Can access 'name' from outer()
    }
    inner();
}
outer();
//  A function can access variables from where it was defined, not from where it’s called.



/* 
    | Scope Type     | Meaning                                              | Example Keyword Affected |
    | -------------- | ---------------------------------------------------- | ------------------------ |
    | Block Scope    | Variables live inside `{}`                           | `let`, `const`           |
    | Function Scope | Variables live inside `function`                     | `var`, `let`, `const`    |
    | Lexical Scope  | Inner functions can access variables of outer scopes | (based on where defined) |
*/