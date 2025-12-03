//                                                  Function call stack

function a() {
    console.log("This is a");
    b();
};

function b() {
    console.log("This is b");
    c();
};

function c() {
    console.log("This is c");
    d();
};

function d() {
    console.log("This is d");
}

a();

/*
        In stack = a() --> b() --> c() --> d() after execution process gets completed, d() --> c() --> b() --> a() this way functions will get poped out of function call stack
        when, a() is called it will go inside function a() and execute "console.log("This is a");" then it will move to next line i.e. b(); then in function call stack b will be created and "console.log("This is b");" this will executed and processs will continue till d() executes and as d() executes it will start popping oit of the stack in LIFO manner like d then c then b then a
*/