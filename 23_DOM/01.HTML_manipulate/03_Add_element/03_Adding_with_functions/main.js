// Normal Way
function addLanguage(langName) {
    let li = document.createElement("li");              // It will create an element
    li.innerHTML = langName;                            // It will add text from parameter
    let toAdd = document.querySelector(".language")     // targetted an element in which we want to add our created element
    toAdd.appendChild(li);                              // added created element in our desired element
}

addLanguage("python")
addLanguage("typescript")
// NOTE : In this case it has to traverse whole DOM structure so its not that optimal but still we can use this


// Optimal Way
function addOptiLanguage(langName) {
    let li = document.createElement("li");                  // It will create an element
    li.appendChild(document.createTextNode(langName));      // It will add text from parameter
    document.querySelector(".language").appendChild(li);    // targetted and added an element in which we want to add our created element
}
addOptiLanguage("Java");
addOptiLanguage("c#");


// Replace any element with created element
let secondLang = document.querySelector("li:nth-child(2)");  // targetted second element of the list
let newLi = document.createElement("li")                     // created new li
let addingTxt = document.createTextNode("Ruby");             // added text 
newLi.appendChild(addingTxt)                                 // pushed textNode innewly created list item
secondLang.replaceWith(newLi)                                // replaced second element of li with new element of li

// Replacing any element with created element using outerHTML property
let firstReplace = document.querySelector("li:first-Child"); // Targetted element
firstReplace.outerHTML = "<li>jQuery</li>"                   // Replaced targetted element with new element using outerHTML