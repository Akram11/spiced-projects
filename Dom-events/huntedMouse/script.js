var hunter = document.querySelector("#hunter");

window.addEventListener("mousemove", (e) => {
    hunter.style.left = e.pageX - 50 + "px";
    hunter.style.top = e.pageY - 50 + "px";
});
