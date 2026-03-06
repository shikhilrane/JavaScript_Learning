let a = 10

function outer() {
    let name = "Shikhil";
    function inner() {
        console.log(name, a); // ✅ Can access 'name' from outer()
    }
    inner();
}

outer();