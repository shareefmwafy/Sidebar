const button = document.querySelector("button");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
button.onclick = function() {

    sidebar.classList.toggle("show-sidebar");
    // overlay.classList.toggle("d-none");
}