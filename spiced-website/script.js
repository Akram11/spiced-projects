var menu = document.querySelector("#menu");
var close = document.querySelector("#close");
var overlay = document.querySelector("#overlay");
var sideNav = document.querySelector("#side-nav");

menu.addEventListener("click", function () {
    overlay.style.visibility = "visible";
    sideNav.classList.add("slide");
});

close.addEventListener("click", function () {
    overlay.style.visibility = "hidden";
    sideNav.classList.remove("slide");
});

overlay.addEventListener("click", function () {
    overlay.style.visibility = "hidden";
    sideNav.classList.remove("slide");
});
