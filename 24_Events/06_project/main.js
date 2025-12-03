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

// 3rd way
document.querySelector('#images').addEventListener("click", function (e) {
    console.log(e);                                 // It will print event
    console.log(e.target);                          // It will print event target
    console.log(e.target.tagName);                  // It will print tags inside of event target
    if (e.target.tagName=="IMG") {                  // if we click on event's target then check if tagName is equals to 'IMG'
        console.log(e.target.id);                   // it will print id of the event's target
        let removeIt = e.target.parentNode;
        removeIt.parentNode.removeChild(removeIt)
        //             OR
        // removeIt.remove()                        // we can even use this method
    }
})