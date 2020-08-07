(function () {
    var kitties = document.querySelectorAll(".kitty-container img");
    var counter = 0;

    function moveKitties() {
        kitties[counter].classList.remove("onscreen");
        kitties[counter].classList.add("offscreen-left");
        kitties[++counter].classList.add("onscreen");

        if (counter < kitties.length - 1) {
            console.log("if", counter);
            setTimeout(moveKitties, 2000);
        } else {
            counter = 0;
            setTimeout(moveKitties, 2000);
            console.log("else", counter);
        }
    }

    setTimeout(moveKitties, 2000);

    document.addEventListener("transitionend", function (e) {
        e.target.classList.contains("offscreen-left") &&
            e.target.classList.remove("offscreen-left");
    });
})();
