//                                                             apply
/*
    use case of apply : to hold the reference of the inner function present outside
*/
function setUsername(username) {
    this.username = username;
}
function createUser(username, email,password) {
    setUsername.apply(this, [username])            // 'this' from createUser is passed in and passed username in []
    this.email = email;
    this.password = password;
}
let info = new createUser("Shikhil", "shikhil@google,com", "123")
console.log(info);

/*
    1. setUsername is the inner function of createUser
    2. we are calling setUsername from createUser.
    3. So, in call stack createUser will go first then setUsername will go in stack
    4. We gave reference of username from function setUsername in createUser
    5. But as we know stack uses LIFO principle, so after executing setUsername in call stack, setUsername will pop out ouf the stack even with parameter username
    6. Next createUser will execute and we won't have reference of username which inside of setUsername
    7. To overcome this problem, we use apply method to preserve reference from setUsername method and use 'this' to refer current context of createUser (i.e. it will say use this parameter for current context)
    8. Even if setUsername function poped-out the call stack, it's reference will remain in the createUser with help of apply method and 'this' will use setUsername's username in createUser
*/