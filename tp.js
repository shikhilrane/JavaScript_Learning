function add(a,b) {
    console.log(a+b);
    return function newFunc(c,d) {
        console.log(c * d);
    };
}

let outer = add(3,4);
let inner = outer(5,6);
console.log(inner);