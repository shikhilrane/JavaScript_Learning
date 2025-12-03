// //  CodeHelp
// let firstPara = document.getElementById("fpara");
// function changeText(event){                       // <== we pass event as object as parameter
//     console.log(event);                           // <== we add event listener executes with this event-handler, it will print event objcet on console
//     firstPara.textContent = "Text Changed";
// };
// firstPara.addEventListener("click", changeText);





// // Chai aur code
// // event object (in EO we get timestamp, x,y direction, event type)
// function addElEo(e) {
//   console.log(e);
//   console.log(e.type);
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