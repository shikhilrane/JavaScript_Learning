// 1. style property (.style) (use to manipulate indivisual style element) 
let paraElement = document.getElementById("spara");
paraElement.style.backgroundColor = "blue";

// 2. CSS text (.style.csstext)  (use to manipulate multiple style element)
let secondElement = document.getElementById("sdiv");
secondElement.style.cssText = "background-color : black; color : white; padding : 0.5rem";

// 3. Set attribute (.style.setAttribute) (use to manipulate class and id name, & can even add css)
let firstElement = document.querySelector("#fdiv");
console.log(firstElement);
// 3.1 It is use to add class/classes (if there's already class/classes present then those class/classes will be replaced by entered class/classes)
firstElement.setAttribute("class", "divClass");
console.log(firstElement);
// 3.2 It is use to add id (if there's already id present then that id will be replaced by entered id)
firstElement.setAttribute("id", "idfdiv");
console.log(firstElement);
// 3.3 It is use to add style (if there's style present in the element then that whole style will be replace by new style added here)
firstElement.setAttribute("style", "padding : 4rem")

// 4. Class name (use to fetch and add multiple classes)
// 4.1 Use to fetch/get class name present in the element
console.log(fpara.className);
"firstClass secondClass thirdClass"
// 4.2 use to replace whole class names by entered class name/s
fpara.className = "fourthClass fifthClass";
"fourthClass fifthClass";

// 5. Class List (it is a method which returns an array. It to fetch, add, remove, toggle, contains multiple classes)
let fpara = document.querySelector("#fpara");
// 5.1 fetch/get class as an array from element
console.log(fpara.classList);
// DOMTokenList(3)['firstClass', 'secondClass', 'thirdClass', value: 'firstClass secondClass thirdClass'];
// 5.2 It is use to add class in an element (here class won't be replaced instead class will be added to existing classList)
fpara.classList.add("fourthClass");
console.log(fpara.classList);
// DOMTokenList(4)['firstClass', 'secondClass', 'thirdClass', 'fourthClass', value: 'firstClass secondClass thirdClass fourthClass'];
// 5.3 It is use to remove class name from the element
fpara.classList.remove("firstClass");
console.log(fpara.classList);
// DOMTokenList(3)['secondClass', 'thirdClass', 'fourthClass', value: 'secondClass thirdClass fourthClass'];
// 5.4 it is use toggle ON or OFF (hide or unhide) of class name from element
fpara.classList.toggle("secondClass");
false
console.log(fpara.classList);
// DOMTokenList(2)['thirdClass', 'fourthClass', value: 'thirdClass fourthClass'];
fpara.classList.toggle("secondClass");
true
// 5.5 It checks if the particular class present in element or not
fpara.classList.contains("secondClass");
true
