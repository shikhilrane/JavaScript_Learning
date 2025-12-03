let heading1 = document.querySelector(".heading1");
let heading2 = document.querySelector(".heading2");
let heading3 = document.querySelector(".heading3");
let heading4 = document.querySelector(".heading4");
let heading5 = document.querySelector(".heading5");
let heading6 = document.querySelector(".heading6");
let heading7 = document.querySelector(".heading7");

// // pyramid of doom or call back hell
// setTimeout(() => {
//     console.log("1 Second completed")
//     heading1.textContent = "one";
//     heading1.style.color = "violet";
//     setTimeout(() => {
//         console.log("2 Second completed")
//         heading2.textContent = "two";
//         heading2.style.color = "purple";
//         setTimeout(() => {
//             console.log("2 Second completed")
//             heading3.textContent = "three";
//             heading3.style.color = "red";
//             setTimeout(() => {
//                 console.log("1 Second completed")
//                 heading4.textContent = "four";
//                 heading4.style.color = "pink";
//                 setTimeout(() => {
//                     console.log("2 Second completed")
//                     heading5.textContent = "five";
//                     heading5.style.color = "green";
//                     setTimeout(() => {
//                         console.log("3 Second completed")
//                         heading6.textContent = "six";
//                         heading6.style.color = "blue";
//                         setTimeout(() => {
//                             console.log("1 Second completed")
//                             heading7.textContent = "seven";
//                             heading7.style.color = "brown";
//                         }, 1000);
//                     }, 3000);
//                 }, 2000);
//             }, 1000);
//         }, 2000);
//     }, 2000);
// }, 1000);
// This is called callback hell or Pyramid of doom because it is not that readable



// pyramid of doom or call back hell with functions
function changeText(element, text, color, time, onSuccess) {
    setTimeout(() => {
            element.textContent = text;
            element.style.color = color;
            onSuccess();
    }, time);
}
changeText(heading1, "one", "violet", 1000, () => {
    changeText(heading2, "two", "purple", 2000, () => {
        changeText(heading3, "three", "violet", 2000, () => {
            changeText(heading4, "four", "pink", 1000, () => {
                changeText(heading5, "five", "green", 2000, () => {
                    changeText(heading6, "six", "blue", 3000, () => {
                        changeText(heading7, "seven", "brown", 1000, () => {})
                    })
                })
            })
        })
    })
})


/*
    1. This methods inside of methods is called as callback hell or pyramid of doom
    2. But this is not a great practice to perform because it will surely devrease the readability of the code
    3. To overcome this problem we use promises in next chapter
    4. To even enhance code with promises, we use async-await code that we will see in next to nex chapter
*/


// Another example of Callback Hell : 
// 1. 
function getData(dataID) {
    setTimeout(() => {
        console.log("data", dataID);
        setTimeout(() => {
            console.log("data2", dataID);
            setTimeout(() => {
                console.log("data3", dataID);
            }, 3000);
        }, 1500);
    }, 2000);
}
getData(123)

// 2.
function exeCb(data, nextFunc) {
    setTimeout(() => {
        console.log('data', data);
        if (nextFunc) {
            nextFunc();
        }
    }, 2000);
}
exeCb(3, () => {
    exeCb(4, () => {
        exeCb(5)
    })
})