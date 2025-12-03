// 1. innerText (get/set only text)
let inrtxt = document.getElementById("fDiv")
console.log(inrtxt.innerText);
// inrtxt.innerText = "inner text"

// 2. textContent (get/set text content wth space and invisible text)
let txtCont = document.querySelector("#fDiv");
console.log(txtCont.textContent);
// txtCont.textContent = "<p>text content</p>";

// 3. innerHTML (get/set inner element with tags)
let inrHtml = document.querySelector("#ioId");
console.log(inrHtml.innerHTML);

// 4. outerHTML (get/set itself & inner element with tags)
let outHtml = document.querySelector("#ioId");
console.log(outHtml.outerHTML);