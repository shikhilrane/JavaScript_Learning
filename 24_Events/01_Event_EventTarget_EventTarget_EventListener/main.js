//                                         Event, Event-Target, Event-Listener, Event-Handler

//  CodeHelp

let firstPara = document.getElementById("fpara");       // <== firstPara is the event target element
function changeText(){                                  // <== Event-Handler
    firstPara.textContent = "Text Changed";
};
firstPara.addEventListener("click", changeText);        // <== "click" is the event
// |___________________________________________|
//                       ^
//                     | | |
//  addEventListener() is used to attach an event handler to an element for a specific event.

/*
    firstPara        →  Event target element
    addEventListener →  method
    click            →  event
    changeText       →  Event-Handler or event handler function 
*/

// // 2. removing event-listener
// firstPara.removeEventListener("click", changeText);





//  Code aur Chai

// // 1st way to add action on the element (worst way to add action)
// onclick="alert('clicked for 1st way')"      // directly add this in element 

let owl = document.getElementById("owl");

// // 2nd way to add action on the element (it is ok but not optimise way to add action, we should not use this because this way does not give us ability of propagation)
// owl.onclick = function () {
//     alert("clicked for 2nd way")
// }

// 3rd way to add action on the element (it is optimised way to add, this way not give us ability of propagation)
function addEl() {
    alert("clicked for 3rd way")
}
owl.addEventListener("click", addEl);