// Removal of element (it is opposite of appendChild())

// Target the parent of the child element to delete
let parentt = document.querySelector("#myDiv");

// Target the child element to delete from the parent
let child = document.querySelector("#fpara");

// Remove the child element from the parent
parentt.removeChild(child);