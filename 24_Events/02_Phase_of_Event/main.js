//  Codehelp
let firstPara = document.getElementById("fpara");
function changeText(){
    firstPara.textContent = "Text Changed";
};
firstPara.addEventListener("click", changeText, true);

/*
    Here,
        by default addEventListener is in bubbling phase (i.e.false) but if we add true in event-listener then it will be in capturing phase
*/





// //  Chai aur Code
// Event propagation
// there are two phases of the event propagation
//  1. Bubbling phase : from target to parent node of the document (child to parent propagation, bottom to top)
//  2. Capturing phase : from parent node of the document to target (parent to child propagation, top to bottom)

// // 1. Bubbling propagation (By default it is in bubbling phase so we dont need to apply false explicitely and most of the project we use this as default)
// let images = document.getElementById("images")
// function addElEpBp1(e) {
//     console.log("clicked inside the UL");     // This is will print second
// }
// images.addEventListener("click", addElEpBp1, false);

// function addElEpBp2(e) {
//     console.log("owl clicked propagation");   // This is will print first
// }
// owl.addEventListener("click", addElEpBp2, false);
// // Because during bubbling phase of propagation, execution will start from the target element so it will first print targeted element

// // 2. Capturing phase  (we need to use true if we want to propagate flow from top to bottom (parent to child))
// function addElEpCp1(e) {
//     console.log("clicked inside the UL");     // This is will print first
// }
// images.addEventListener("click", addElEpCp1, true);

// function addElEpCp2(e) {
//     console.log("owl clicked propagation");     // This is will print second
// }
// owl.addEventListener("click", addElEpCp2, true);
// // Because during capturinf phase of propagation, execution will start from the parent node of document element so it will first execute outside element and then it will ececute the target element

// // .stopPropagation() is use to stop propagation, it allows only specified element to execute (i.e. it won't bubble or capture further)
// // 1. .stopPropagation() of bubbling phase
// function addElEpSb1(e) {
//     console.log("clicked inside the UL"); 
//     e.stopPropagation()    
// }
// images.addEventListener("click", addElEpSb1, false);

// function addElEpSb2(e) {
//     console.log("owl clicked propagation");     
//     e.stopPropagation()
// }
// owl.addEventListener("click", addElEpSb2, false);
// // Here, if we clicked on target (owl) then only that will be execute then it will stop propagating further towards it's parent element

// // 2. .stopPropagation() of capturing phase
// function addElEpSc1(e) {
//     console.log("clicked inside the UL"); 
//     e.stopPropagation()    
// }
// images.addEventListener("click", addElEpSc1, true);

// function addElEpSc2(e) {
//     console.log("owl clicked propagation");     
//     e.stopPropagation()
// }
// owl.addEventListener("click", addElEpSc2, true);
// // Here, if we clicked on parent (image) then only that will be execute then it will stop propagating further towards it's child element. Even if we click on owl,it will only execute parent of the element