// Replace any element with created element
let secondLang = document.querySelector("li:nth-child(2)");  // targetted second element of the list
let newLi = document.createElement("li")                     // created new li
let addingTxt = document.createTextNode("Ruby");             // added text 
newLi.appendChild(addingTxt)                                 // pushed textNode innewly created list item
secondLang.replaceWith(newLi)                                // replaced second element of li with new element of li

// Replacing any element with created element using outerHTML property
let firstReplace = document.querySelector("li:first-Child"); // Targetted element
firstReplace.outerHTML = "<li>jQuery</li>"                   // Replaced targetted element with new element using outerHTML