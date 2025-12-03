// 1. getElementbyId()
let targetId = document.getElementById("sPara");
console.log(targetId);
console.log(targetId.id);
console.log(targetId.getAttribute("id"));
console.log(targetId.className);
console.log(targetId.getAttribute("class"));
console.log(targetId.tagName);

console.log("getElementbyId() ends here");

// 2. getElementsByClassName()  (returns HTMLCollection)
let targetCN = document.getElementsByClassName("textMatter");
console.log(targetCN);
console.log(targetCN[0].id);
console.log(targetCN[3].getAttribute("id"));
console.log(targetCN[0].className);
console.log(targetCN[2].getAttribute("class"));
console.log(targetCN[4].tagName);

console.log("getElementsByClassName() ends here");

// 3. querySelector()
let targetQs = document.querySelector("#tPara");
console.log(targetQs);
console.log(targetQs.id);
console.log(targetQs.getAttribute("id"));
console.log(targetQs.className);
console.log(targetQs.getAttribute("class"));
console.log(targetQs.tagName);

console.log("querySelector() ends here");

// 4. querySelectorAll()    (returns NodeList)
let targetQsa = document.querySelectorAll(".textMatter");
console.log(targetQsa);
console.log(targetQsa[2].id);
console.log(targetQsa[1].getAttribute("id"));
console.log(targetQsa[4].className);
console.log(targetQsa[4].getAttribute("class"));
console.log(targetQsa[0].tagName);

console.log("querySelectorAll() ends here");

// 5. getElementsByTagName() (returns HTMLCollection)
let targetTn = document.getElementsByTagName("p");
console.log(targetTn);
console.log(targetTn[3].id);
console.log(targetTn[1].getAttribute("id"));
console.log(targetTn[3].className);
console.log(targetTn[2].getAttribute("class"));
console.log(targetTn[0].tagName);

console.log("getElementsByTagName() ends here");

// 6. $0 (Developer Tools Special Variable)
// $0 = when select any element by clicking on it then on its HTML $0 appears and then go to console and type $0 then it will return whole element

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Return Type  : 
//  1. NodeList (has support of only forEach and not of map, filter, reduce. To get support of these convt this to Array) : querySelectorAll()
//  2. HTMLCollection (doesn't have support of forEach, map, filter, reduce. To get support of these convt this to Array) : getElementsByClassName(), getElementsByTagName()

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------

// LOOPS on NodeList & HTML Collection : 
// 1. forEach loop on NodeList (querySelectorAll())
targetQsa.forEach(element => {
    console.log(element);
});

console.log();

// NOTE : NodeList is not an Array but NodeList's prototype has support of forEach() so we can use it, but NodeList does not support map(), filter(), reduce(). So, if we want to apply these methods we have to convert NodeList into Array by using Array.from(NodeList) then we can use it
console.log(targetQsa[1].textContent); // it will returns textContent at specified element's index

// 2. forEach loop on HTMLCollection (getElementsByClassName() & getElementsByTagName())
// 2.1 loop on getElementsByClassName()
let convtCnToArr = Array.from(targetCN);
// 2.1.1 forEach loop on getElementsByClassName()
convtCnToArr.forEach((element) => {
    console.log(element);
})

console.log();

// 2.1.2 map loop on getElementsByClassName()
let cnToMap = convtCnToArr.map((element) => {
    console.log(element);
})

console.log();

// 2.2 loop on getElementsByTagName()
let convtTnToArr = Array.from(targetTn);
// 2.2.1 forEach loop on getElementsByTagName()
convtTnToArr.forEach((element) => {
    console.log(element);
})

console.log();

// 2.2.2 map loop on getElementsByTagName()
let tnToMap = convtTnToArr.map((element) => {
    console.log(element);
})