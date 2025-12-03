let title = document.getElementById("title");
let nameField = document.getElementById("nameField");
let signInButton = document.getElementById("signInButton");
let signUpButton = document.getElementById("signUpButton");
let signuptext = document.getElementById("signupText");

signUpButton.addEventListener("click", (event) => {
    event.preventDefault();  // <-- Prevent the page from reloading
    title.innerHTML = "Sign Up";
    nameField.style.display = "block";
    signUpButton.style.display = "none"
    signuptext.style.display = "none";
});

signInButton.addEventListener("click", () => {
    title.innerHTML = "Login";
    nameField.style.display = "none";
})