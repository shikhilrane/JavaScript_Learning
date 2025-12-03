//                                                        BLOCK SCOPE
{
    let a = 10;
    const b = 20;
    var c = 30;
}
console.log(a); // ❌ Error
console.log(b); // ❌ Error
console.log(c); // ✅ 30 (because `var` is not block scoped)
//  ✅ Variables declared with let and const are only available inside { }.
//  ❌ var is not block scoped, so it "leaks" outside the block.