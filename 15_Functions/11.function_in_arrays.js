//                                                      function in Arrays

let arr = [
    function (a,b) {
        return a + b;
    },
    function (a,b) {
        return a + b;
    },
    function (a,b) {
        return a + b;
    }
]

let fFn = arr[0];
let res_fFn = fFn(5,3);
console.log(res_fFn);