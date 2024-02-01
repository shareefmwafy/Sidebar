const buttonshow = document.querySelector(".buttonshow");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
const buttonClose =document.querySelector(".buttonClose");
buttonshow.onclick = function() {

    sidebar.classList.toggle("show-sidebar");
    overlay.classList.toggle("d-none");
    // buttonClose.classList.toggle("close-sidebar");
}
buttonClose.onclick = function() {
    sidebar.classList.toggle("show-sidebar");
    overlay.classList.toggle("d-none");

}