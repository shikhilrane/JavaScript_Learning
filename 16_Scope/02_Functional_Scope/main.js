//                                                       FUNCTION SCOPE
function funct() {
    let a = 10;
    const b = 20;
    var c = 30;
}
funct();
console.log(a); // ❌ Error
console.log(b); // ❌ Error
console.log(c); // ❌ Error
//  ✅ Everything (let, const, var) declared inside a function is only accessible within that function.