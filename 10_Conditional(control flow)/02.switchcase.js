//                                          *************************** Switch Case *******************************

// switch statement is used to perform different actions based on different conditions


const prompt = require('prompt-sync')();

let phone = parseInt(prompt("select brand phone you want to purchase : "));
switch (phone) {
    case 1:
        console.log("do you want to purchase apple product?");
        break;
    case 2:
        console.log("do you want to purchase samsung product?");
        break;
    case 3:
        console.log("do you want to purchase redmi product?");
        break;
    case 4:
        console.log("do you want to purchase one plus product?");
        break;
    case 5:
        console.log("do you want to purchase oppo product?");
        break;
    case 6:
        console.log("do you want to purchase vivo product?");
        break;
    default:
        console.log("i guess you dont to purchase any product");
        break;
}