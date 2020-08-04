(function () {
    var headlines = document.getElementById("headlines");
    var left = headlines.offsetLeft;
    var links = document.getElementsByTagName("a");
    var record;

    function dragLeft() {
        if (left == -links[0].offsetWidth) {
            left = left + links[0].offsetWidth;
            headlines.appendChild(links[0]);
        }
        left--;
        headlines.style.left = left + "px";
        record = requestAnimationFrame(dragLeft);
    }

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("mouseenter", function (event) {
            this.style.textDecoration = "underline";
            window.cancelAnimationFrame(record);
        });

        links[i].addEventListener("mouseleave", function (event) {
            this.style.textDecoration = "none";
            dragLeft();
        });
    }

    dragLeft();
})();
