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

var modal = $("center-modal");
console.log(modal.html());
// overlay.addEventListener("click", function () {
//     overlay.style.visibility = "hidden";
//     sideNav.classList.remove("slide");
// });
// $(document).setTimeout(function () {
//     $("#center-modal").css("visibility", "visible");
// }, 2000);
