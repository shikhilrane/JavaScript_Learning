//                                                        Lexical Scope
function outer() {
    let username = "Shikhil";
    function innerOne() {
        console.log(username, "ONE");       // Username is accessible in this function
    }
    innerOne();
    function innerTwo() {
        console.log(username, "TWO");       // Username is accessible in this function
    }
    innerTwo();
}

outer();

// console.log(username);                   // Username is accessible in outside the function

// NOTE : innerOne() and innerTwo() is in the lexical environment of outer() function


//                                                          Closure
// 1. Closure is the inner function return itself inside the outer function 
// 2. It's not just the inner function that runs — it remembers the scope it was created in.
// 3. In closure, the outer function will also return along with inner function. When the outer function returns the inner function, the inner function keeps a reference to the outer function's variables (this is the closure)
// 4. So, everything in the outer function's scope stays "alive" as long as the inner function (closure) is in use.
function outerFunc() {
    let data = "DB";
    function innerFunc() {
        console.log(data);
    }
    return innerFunc;
}

let exe = outerFunc();
exe();
/*
    -line no 32 se function call hogi. Fir wo fucntion execution ke paas jaega mtlb line no 24 pe aur yha se function ki body start ho rhi he
    -line no 25 pe outerfunc ke andar ek variable (let data = "DB";) bana hua he jo he jo "DB" naam ke value ko point kar rha he
    -fir line no 26 pe function ki body mili and use kuchh nhi kar skte kyuki fucntio. call nahi hua he
    -fir line no 29 pe aaye to waha return kar diya innerFunc jo ki ke line no 26 wale function ka reference.
    -fir line no 32 pe innerFunc ka reference ka return ho gya he
    -to yha se ab hum maan rahe hoge ki ye pura function destroy ho gya hoga and data naam ka variable bhi chale gya hoga
    -Pr hamare pass to line no 32 se innerFunc ka reference store he exe ke andar. Iska mtlb he ki exe innerFunc se mapped he
    -fir hum gaye line no 33, waha exe innerFunc ki call laga dega fir hum line no 26 pe aaye aur uske andar gye to data log ho rha he
    -par data to clear ho gya he memory se? But actually aisa nahi hota kyuki nested fucntion ke case me, data variable jo he wo innerFunc() ke sath bind kar diya hoga
    -aur innerFunc ke pass data ke reference store he thats why inner function ne data ka inner part print kar diya
*/

// Real world problem solving
function clickHandler(color) {
    return function(){
        document.body.style.backgroundColor = `${color}`;
    }
}

document.getElementById("orange").onclick = clickHandler("orange")
document.getElementById("green").onclick = clickHandler("green")