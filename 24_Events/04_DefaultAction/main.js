//  CodeHelp
function defaultAction(event) {
  event.preventDefault(); // Stops the browser from navigating to the link
  anchorElement.textContent = "It won't redirect to link";
}
let anchorElement = document.getElementById("myLink")
anchorElement.addEventListener("click", defaultAction);







// //  Chai aur code
// // Prevent default (it is use to change default behavior like it will stop opening the link or image attached with link with anchor tag)
// let link = document.getElementById("google");
// function pd(e) {
//     console.log("google clicked");
//     e.preventDefault();
//     e.stopPropagation();
// }
// link.addEventListener("click", pd);