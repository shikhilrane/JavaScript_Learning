// // 1st way to add action on the element (worst way to add action)
// onclick="alert('clicked for 1st way')"      // directly add this in element 

let owl = document.getElementById("owl");

// // 2nd way to add action on the element (it is ok but not optimise way to add action, we should not use this because this way does not give us ability of propagation)
// owl.onclick = function () {
//     alert("clicked for 2nd way")
// }

// // 3rd way to add action on the element (it is optimised way to add, this way not give us ability of propagation)
// function addEl() {
//     alert("clicked for 3rd way")
// }
// owl.addEventListener("click", addEl);

/* another approaches to add
    1. attachEvent() = this event was on early time, now it is deprecated
    2. jQuery = .onEvent which is not in use in recent times because react can do that for you
*/

// // event object (in EO we get timestamp, x,y direction, event type)
// function addElEo(e) {
//   console.log(e);
//   console.log(e.timeStamp);
//   console.log(e.pageX);
//   console.log(e.height);
//   console.log(e.width);
//   console.log(e.cancelBubble);
//   console.log(e.target);
//   console.log(e.currentTarget);
//   console.log(e.clientX, e.clientY)
//   console.log(e.screenX, e.screenY)
//   console.log(e.tiltX, e.tiltY)
// }
// owl.addEventListener("click", addElEo);

// // added event listener directly on document where if we press control key and event.key=='s' then following code will be executed
// document.addEventListener('keydown', function(event) {
//     if (event.ctrlKey && event.key === 's') {
//         event.preventDefault(); // prevent Save
//         console.log('Ctrl+S pressed');
//     }
// });

/*
    we should learn for event object
        1. type of events   :   'click', 'keydown', 'submit', 'mouseover', 'change'.
        2. timeStamp    :   A number (in milliseconds) showing when the event was created (relative to page load)  e.g. console.log(e.timeStamp);
        3. preventDefault() : Prevents the default action of the event
        4. target   :   Refers to the actual element that triggered the event. e.g. console.log(e.target);
        5. toElement    :   Refers to the element the pointer entered into (used in mouseover, mouseout). Mostly used in IE; modern browsers use 
                            relatedTarget.
        6. srcElement   :   The same as target, but used in older versions of IE. For modern code, just use event.target
        7. currentTarget    :   The element on which the event listener is attached. console.log(e.currentTarget);
        8. clientX, clientY, screenX, screey, tiltX, tiltY  :   Mouse or pointer coordinates:
                                                                1. clientX/Y: Coordinates within the browser viewport. 
                                                                    console.log(e.clientX, e.clientY)
                                                                2. screenX/Y: Coordinates relative to the screen.
                                                                    console.log(e.screenX, e.screenY)
                                                                3. tiltX/Y: Pen tilt angles for stylus devices (0–90 degrees).
                                                                    console.log(e.tiltX, e.tiltY)
        9. altKey, ctrlKey, shiftKey, keyCode   :   Indicate modifier keys during events:
                                                    1. altKey, ctrlKey, shiftKey: true if the respective key is pressed.
                                                    2. keyCode: deprecated, use event.key instead.
                                                    3. Example
                                                    document.addEventListener('keydown', function(event) {
                                                        if (event.ctrlKey && event.key === 's') {
                                                            event.preventDefault(); // prevent Save
                                                            console.log('Ctrl+S pressed');
                                                        }
                                                    });
*/

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

// // Prevent default (it is use to change default behavior like it will stop opening the link or image attached with link with anchor tag)
// let link = document.getElementById("google");
// function pd(e) {
//     console.log("google clicked");
//     e.preventDefault();
//     e.stopPropagation();
// }
// link.addEventListener("click", pd);

// // small project
// // 1st way
// document.querySelector('#images').addEventListener("click", function (e) {
//     console.log(e);                     // It will print event
//     console.log(e.target);              // It will print event target (img tag)
//     console.log(e.target.parentNode);   // It will print parent node of the element (li tag)
//     let removeIt = e.target.parentNode; // saved location of the parent node
//     removeIt.remove()                   // it will remove whole li not just img. If we applied remove method on e.target (i.e. on target element) then it would only delete img tag and its parent element (i.e.) would be present there. So to remove whole li, we directly targetted parent of the img
// })
// // Here if we click on whole li (container that contains img) then everything will be get removed because parent of li is ul and we are passing to remove li then every element of the ul will get removed

// // 2nd way
// document.querySelector('#images').addEventListener("click", function (e) {
//     console.log(e);                             // It will print event
//     console.log(e.target);                      // It will print event target
//     console.log(e.target.parentNode);           // It will print parent node of the element (li tag)
//     let removeIt = e.target.parentNode;         // saved location of the parent node
//     removeIt.parentNode.removeChild(removeIt)   // it give parentNode of removeIt (i.e. ul) then that ul removed specified child (removeIT (i.e. clicked li as per event listener)) of it with removedChild() method
// })
// // Here if we click on whole li (container that contains img) then everything will be get removed because parent of li is ul and we are passing to remove li then every element of the ul will get removed

// // 3rd way
// document.querySelector('#images').addEventListener("click", function (e) {
//     console.log(e);                                 // It will print event
//     console.log(e.target);                          // It will print event target
//     console.log(e.target.tagName);                  // It will print tags inside of event target
//     if (e.target.tagName=="IMG") {                  // if we click on event's target then check if tagName is equals to 'IMG'
//         console.log(e.target.id);                   // it will print id of the event's target
//         let removeIt = e.target.parentNode;
//         removeIt.parentNode.removeChild(removeIt)
//         //             OR
//         // removeIt.remove()                        // we can even use this method
//     }
// })