(function () {
    var kitties = document.querySelectorAll(".kitty-container img");
    var dots = document.querySelectorAll(".dots-container .dot");
    var currentKittie = 0;
    var isTransitioning = false;
    var timer;
    function moveKitties(index) {
        isTransitioning = true;
        kitties[currentKittie].classList.remove("onscreen");
        kitties[currentKittie].classList.add("offscreen-left");
        dots[currentKittie].classList.remove("on");

        if (index == undefined) {
            currentKittie >= kitties.length - 1
                ? (currentKittie = 0)
                : currentKittie++;

            kitties[currentKittie].classList.add("onscreen");
            dots[currentKittie].classList.add("on");
        } else {
            kitties[index].classList.add("onscreen");
            dots[index].classList.add("on");
            currentKittie = index;
        }
    }

    document.addEventListener("transitionend", function (e) {
        if (e.target.classList.contains("offscreen-left")) {
            e.target.classList.remove("offscreen-left");
            isTransitioning = false;
            timer = setTimeout(moveKitties, 3000);
        }
    });

    for (var i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", clickHandler(i));
    }

    function clickHandler(dotIndex) {
        return function () {
            if (isTransitioning) {
                return;
            }
            clearTimeout(timer);

            moveKitties(dotIndex);
        };
    }

    setTimeout(moveKitties, 3000);
})();
