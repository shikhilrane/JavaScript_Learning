                                                        // Stack and heap memory

                                /*
                                        1.  there are two types of memory
                                        2.  Stack memory and Heap memory
                                        3.  primitive data type stored in stack memory (it make another copy)
                                            e.g. let a = 10;
                                                console.log(a);        => o/p will be 10
                                                a = 11;       
                                                console.log(a);        => o/p will be 11
                                            so, basically when we change value in primitive data type, it will make another copy(i.e. a=11) of that variable & dont change original variable value (i.e. a=10)
                                        4.  non-primitive data type stored in heap memory (it gives reference)
                                            e.g. let objectHeap = {
                                                name : "Shikhil",
                                                email : "shikhilrane@gmail.com"
                                            }
                                            console.log(objectHeap);
                                            objectHeap.email : "shikhil@gmail.com"
                                            console.log(objectHeap);   => o/p will be printed with updated value
                                            so, basically when we change value in primitive data type, it will change value in original data type

                                        *************** for more reference go through image ******************
                                */

// Stack memory
let a = 10;
console.log(a);
a = 11;
console.log(a);

// Heap memory
let objectHeap = {
    name : "shikhil",
    email : "shikhilrane@google.com"
}
console.log(objectHeap);
objectHeap.email = "shikhil@google.com";
console.log(objectHeap);