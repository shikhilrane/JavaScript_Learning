/*
                                                            Performance
                                    It is use to check Performance of the code.
                                    It shows how much time my code is taking to run by using performance.now() method
*/

// 1st way
let t1 = performance.now();

for (let i = 1; i <= 100; i++) {
    let newElement = document.createElement('p');
    newElement.textContent = ("This is pararagraph no. " + i + " of 1st way");
    document.body.appendChild(newElement);
};

let t2 = performance.now();
console.log("total time taken by code1 = " + (t2-t1));

// 2nd way
let t3 = performance.now();

let myDiv = document.createElement('div');
for (let i = 1; i <= 100; i++) {
    let newElement = document.createElement("p");
    newElement.textContent = ("This is pararagraph no. " + i + " of 2nd way");
    myDiv.appendChild(newElement);
};
document.body.appendChild(myDiv);

let t4 = performance.now();
console.log("total time taken by code2 = " + (t4-t3));

// Here, 2nd way is faster than 1st way, even 2nd way contain more codes of line. So, to understand this we will learn Reflow and Repaint

/*
    1. Reflow (calculation) (slower) : 
        It is a process of calculating position/dimension of element to render on the page
        It is computationally expensive task
    2. Repaint (printing content on webpage) (faster): 
        It is a process of displaying/painting pixel by pixel the content on webpage according to position given by the reflow

    so, if there are more reflow and more repaint then that code will become slower

    In above two codes why 2nd code is faster than 1st code : 
        why 1st code is slower : because in 1st code we are performing reflow and repaint everytime whenever we want to print every statement.
        why 2nd code is faster : because in 2nd way we created a div. Then we append newElement to myDiv but we dont want to show anything on screen
                                 now because we haven't attached it to DOM. After 100th operation code execution will be at appending a child to body. so in that process compiler had to do reflow as well as repaint that is just for 1 single time
        So, In number of reflows and repaint are less in 2nd way than in 1st way, thats why 2nd code is faster

*/


// Document Fragment : It is a lite-weight DOM. Whenever we append anything on body it requires reflow and repaint but document fragment doesn't 
//                     require that
// Best Code

let t5 = performance.now();

let fragmentCreation = document.createDocumentFragment();
for (let i = 1; i <= 100; i++) {
    let para = document.createElement('p');
    para.textContent = "This is para " + i;
    fragmentCreation.appendChild(para);    // No reflow and No repaint on this line
};
document.body.appendChild(fragmentCreation);    // It will take 1 reflow and 1 repaint

let t6 = performance.now();
console.log("total time taken by Best code = " + (t6-t5));