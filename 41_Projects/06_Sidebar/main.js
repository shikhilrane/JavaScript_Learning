let menu = document.querySelector(".menu");
let sidebar = document.querySelector(".sidebar");

// Adding event listener to menu btn
menu.addEventListener("click", () => {
    sidebar.classList.add("showSidebar")
})

// Adding event listener to document
document.addEventListener("mouseup", (event) => {
    if (!sidebar.contains(event.target)) {
        sidebar.classList.remove("showSidebar")
    }
})