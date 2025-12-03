// // 1st way (targetting each element)
// let para = document.querySelectorAll("p");                   // target direct parent of all elements
// function alertParas(event) {
//     alert("You have clicked on " + event.target.textContent) // (event jo aya he uske andar jo target he and us target ke andar ki info print kar dena)
// }
// for (let i = 0; i < para.length; i++) {
//   let pyara = para[i];
//   pyara.addEventListener("click", alertParas);
// }

// // 2nd Way (targetting direct parent of the all 4 element) (OPTIMAL WAY)
// let myDiv = document.getElementById("wrapper");              // target direct parent of all elements
// function alertParas(event) {
//     alert("You have clicked on " + event.target.textContent) // (event jo aya he uske andar jo target he and us target ke andar ki info print kar dena)
// }
// myDiv.addEventListener("click", alertParas)

// // 3rd way (if we click on every element (p) of wrapper2 it wil print whole content inside of element (p) but if we click on span element it will only print content inside of span element)
// let myDiv2 = document.getElementById("wrapper2");
// function spanAdded(event) {
//     alert("You have clicked on " + event.target.textContent)
// }
// myDiv2.addEventListener("click", spanAdded);

// 4th way (if we click on every element (p) of wrapper3 it won't print anything but if we click on span element it will only print content inside of span element)
let myDiv3 = document.getElementById("wrapper3");
function onlySpan(event) {
    if (event.target.nodeName=="SPAN") {
        alert("You have clicked on " + event.target.textContent)
    }
}
myDiv3.addEventListener("click", onlySpan);