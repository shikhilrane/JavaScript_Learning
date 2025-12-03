//                                                         array with for loop

let nums = [3,54,1,4,5]

// 1. traditional way to print array using loops
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}

// 2. forEach loop (it is used to print array element one by one using forEach loop, it doesn't change original array)
nums.forEach(function (n,i,num) { // we also can use arrow function here (n&i are standard in forEach loop where n is number and i is iterations)
    console.log(n*n, n+2, i, num[4]*num[3]);  // we can perform as many as operations using forEach loop
})
// where,
// n = value
// i = index
// num = array

                    // or

let iterateNums = nums.forEach(function (n,i,num) {
    console.log(n*n, n+2, i, num[4]*num[3]);
})

                    // or

function secondMethod(val,iteration,number) {           //  in this case we first make a function and then push that function name in forEach loop
    console.log(val,iteration,number[3]*number[1]);     
}
nums.forEach(secondMethod)

// 3. forEach loop on object in an array 
let carArr = [
    {
        name : "Audi",
        model : 520,
        fuel_type : "diesel",
        color : "black"
    },
    {
        name : "bmw",
        model : 3,
        fuel_type : "petrol",
        color : "sapphire white"
    }
]
carArr.forEach(function (value){        // this is callback function thats why we dont name the function
    console.log(value.name);
    console.log(`name of car is ${value.name} with color ${value.color} of model ${value.model} ${value.fuel_type}`);
})

// NOTE :- forEach loop does not return anything, itcan only print


// 4. Using forEach to change the original array
const num = [1, 2, 3];
num.forEach((val, index, arr) => {
  arr[index] = val * 2; // manual mutation
});
console.log(num); // [2, 4, 6] ← changed