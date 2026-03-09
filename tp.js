let localVar = document.querySelector("#fpara");

localVar.onclick = () => alert("using onClick");

// localVar.addEventListener("click", () => alert("clicked on fpara"));


let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
    let sum = num1 + num2;
    let total = sum + add1();
    return total;
}

function add1() {
    return 1;
}

let result = addNum(val1,val2);
console.log(result);