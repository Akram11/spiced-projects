(function () {
    var kitties = document.querySelectorAll(".kitty-container img");
    var currentKittie = 0;

    function moveKitties() {
        kitties[currentKittie].classList.remove("onscreen");
        kitties[currentKittie].classList.add("offscreen-left");
        currentKittie++;
        if (currentKittie >= kitties.length) {
            currentKittie = 0;
        }
        kitties[currentKittie].classList.add("onscreen");
    }

    document.addEventListener("transitionend", function (e) {
        if (e.target.classList.contains("offscreen-left")) {
            e.target.classList.remove("offscreen-left");
            setTimeout(moveKitties, 3000);
        }
    });

    setTimeout(moveKitties, 3000);
})();
