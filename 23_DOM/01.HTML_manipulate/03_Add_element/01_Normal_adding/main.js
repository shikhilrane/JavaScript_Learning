// 1. Normally adding Element
// Step 1 = Creating an Element
let insrtElemnt = document.createElement("h1");

// Step 2 = Adding content in created element
insrtElemnt.textContent = "Adding new element"

// Step 3 = Targetted an element in which we want to add created element
let bodyTag = document.querySelector("body");

// Step 4 = Inserting an created element in targetted element
bodyTag.appendChild(insrtElemnt);

//                                  OR
// 2. to add at our desired position
// Step 1 = Creating an Element
let crtEle = document.createElement("p")

// Step 2 = Adding content in created element
crtEle.textContent = "I am the desired position element"

// Step 3 = Targetted an element in which we want to add created element
let trgtEle = document.querySelector("#desiredPosition");

// Step 4 = Targetting element before which element we want to add our created element
let fourthChild = trgtEle.children[3];

// Step 5 = Adding created element in targetted element accor. to position
trgtEle.insertBefore(crtEle, fourthChild)


// 3. creating and HTML element and adding with attributes
// Step 1 = Creating an element
let div = document.createElement("div");        

// Step 2 = added classes 
div.className = "mainClass1 mainClass2"; 

// Step 3 = added ID
div.id = "mainId";                        

// Step 4 = added another attricute by using .setAttribute method
div.setAttribute("title", "generated title");    

// Step 5 = added style to it
div.style.color = "green";                           
div.style.backgroundColor = "yellow";                           

// Step 6 = added content as a text in it
div.innerText = "this is nice ";                 

// Step 7 = added more content as a text in it by using .createTextNode() method (another way to add)
let add = document.createTextNode("this is nice too")  

// Step 8 = added above "add" content in div
div.appendChild(add)                              

// Step 9 = added div to body of the document
document.body.appendChild(div);                         