// The continue statement ends the current operation of the loop and returns to the condition at the top of the loop. Such loops are typically used to exclude some values from calculations.

// i. "continue;" in for loop
for (let i = 1; i <= 10; i++) {
    if (i==7) {
        console.log("we have reached 7");
        continue;
        // when value of i reaches to 7 then this loop will skip to print number 7 & will print whatever will be in the if statement & then will continue print the number from 8
    }
    console.log(i);
}


// ii. "continue;" in while loop
// **NOTE** => in while loop continue statement doesn't work when j++ (i.e. iterator) on bottom (It actually create infinte loop) cause Your continue statement instructs the shell to immediately skip execution to the next loop iteration. thats why we need to apply iterator at the starting of the loop
let n = 10;
let j = 0; //also we need to start loop iterator from 0 as it will increase 0 to 1 at start of loop during execution
while (j<n) {   // also we need to apply "<" only as it will not execute (n+1) statement
    j++; 
    if (j==5) {
        console.log("loop reaches half way");
        continue;
    }
    console.log(j);
}


// iii. "continue;" in do while loop
// **NOTE** => in do-while loop continue statement doesn't work when j++ (i.e. iterator) on bottom (It actually create infinte loop) cause Your continue statement instructs the shell to immediately skip execution to the next loop iteration. thats why we need to apply iterator at the starting of the loop
let n2 = 10;
let k = 0; //also we need to start loop iterator from 0 as it will increase 0 to 1 at start of loop during execution
do {
    k++;
    if (k==5) {
        console.log("loop reaches half way");
        continue;
    }
    console.log(k);
}while(k<n2);   // also we need to apply "<" only as it will not execute (n+1) statement