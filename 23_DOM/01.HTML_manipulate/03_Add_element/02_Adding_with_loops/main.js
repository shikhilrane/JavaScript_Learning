let parent = document.querySelector(".parent");
console.log(parent);                                //  This will let us access all the elements inside of the parent
console.log(parent.children);                       //  It will give HTMLCollection (.children will let us access inner element of element)
console.log(parent.children[1].innerHTML);          //  This will give us element at specified index, as we know HTMLCollection is like array
for (let index = 0; index < parent.children.length; index++) {
    console.log(parent.children[index].innerText)
};

// parent to child traverse
console.log(parent.firstElementChild);              // It will give first child of the parent element
console.log(parent.lastElementChild);               // It will give last child of the parent element

// child to parent traverse
let dayOne = document.querySelector(".day");
console.log(dayOne);
console.log(dayOne.parentElement);                  // It will print parent element of the given element
console.log(dayOne.nextElementSibling);             // It will give next sibling element of the given element
console.log(dayOne.previousSibling);                // It will give previous sibling element of the given element

// .childNodes (as we know in HTML we have added 4 div, and it returns 9 NodeList because it even count enters we press during creating an elements)
console.log(parent.childNodes);