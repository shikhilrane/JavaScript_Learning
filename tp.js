let obj1 = {
    name: "Shikhil",
    age: 27,
    itObj: function (country) {
        if (country == undefined) {
            console.log("enter country name : ");
        }
        return (`name of the candidate is ${this.name} and age of the candidate is ${this.age} and he is from ${country}`);
    }
}
let obj2 = {
    name: "Haaland",
    age: 23,
    __proto__: obj1   // we took access of function in obj1 in an Obj2
}
let obj3 = {
    name: "lamine yamal",
    age: 16,
    __proto__: obj2   // we can insert obj2 in proto of obj3, cause that function we required is already present in obj2 like, __proto__ : obj2
}

let exe1 = obj3.itObj("India");
console.log(exe1);