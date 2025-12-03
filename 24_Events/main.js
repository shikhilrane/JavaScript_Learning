// function changeText(event) {
//   console.log(event);  
//   let fpara = document.getElementById("fpara");
//   fpara.textContent = "Event listener successfully done congrats";
// }

// // 1. adding event-listener
// let fpara = document.getElementById("fpara");
// fpara.addEventListener("click", changeText);
// /*
//     fpara : event-target (kis element ke upar apply kar rhe ho)
//     "click" : event-type  (kis event keliye apply kar rhe ho)
//     changeText : function that define action (aur event type ke hisab se kya karna he ye iske andar hoga)
//  */

// // 2. removing event-listener
// fpara.removeEventListener("click", changeText);

// // 3. Default Action
// function defaultAction(event) {
//   console.log(event);  
//   event.preventDefault(); // Stops the browser from navigating to the link
//   anchorElement.textContent = "It won't redirect to link";
// }
// let anchorElement = document.getElementById("myLink")
// anchorElement.addEventListener("click", defaultAction);

// // 4. 
// // First way (tagetting each element)
// function alertParas(event) {
//   alert("You have clicked on " + event.target.textContent) // (event jo aya he uske andar jo target he and us target ke andar ki info print kar dena)
// }
// let para = document.querySelectorAll("p");
// for (let i = 0; i < para.length; i++) {
//   let pyara = para[i];
//   pyara.addEventListener("click", alertParas);
// }
// // Second Way (targetting direct parent of the all 4 element)
// let myDiv = document.getElementById("wrapper");
// function alertParas(event) {
//   if (event.target.nodeName == "SPAN") {
//     alert("You have clicked on " + event.target.textContent) // (event jo aya he uske andar jo target he and us target ke andar ki info print kar dena)
//   }
// }
// myDiv.addEventListener("click", alertParas)

/*
  here, 
    1. event = "click"
    2. event-target = fpara
    3. event-listener = changeText  (inside addEventListener and removeEventListener)
    4. event-handler = changeText() (function)
    5. Phase of event = by default it is in bubbling phase (i.e. fpara.addEventListener("click", changeText);) 
                        and if we entered true during .addEventListener then it will be in capturing phase (fpara.addEventListener("click", changeText, true);)
    6. event-object = function is executing under click so event will be of click
 */