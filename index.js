const buttonshow = document.querySelector(".buttonshow");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
const buttonClose =document.querySelector(".buttonClose");
buttonshow.onclick = function() {

    sidebar.classList.add("show-sidebar");
    overlay.classList.toggle("d-none");
    sidebar.classList.remove("close-sidebar");
    // buttonClose.classList.toggle("close-sidebar");
}
buttonClose.onclick = function() {

    sidebar.classList.remove("show-sidebar");
    sidebar.classList.add("close-sidebar");
    overlay.classList.toggle("d-none");

}