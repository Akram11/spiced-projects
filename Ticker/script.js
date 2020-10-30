(function () {
    var headlinesHTML = "";
    var links;
    $.ajax({
        url: "/data.json",
        method: "GET",
        success: function (response) {
            for (var i = 0; i < response.length; i++) {
                var headlineHTML = `<a class = "link" href="${response[i].href}">${response[i].title}</a>`;
                headlinesHTML += headlineHTML;
            }
            $(".headlines").html(headlinesHTML);
            links = $("#headlines a");
        },
        error: function (err) {
            console.log(err);
        },
    });

    ticker("ticker", -1);
    function ticker(id, step) {
        var ticker = document.getElementById(id);
        var headlines = ticker.querySelector(".headlines");
        var links = headlines.querySelector(".link");
        var curX = headlines.offsetLeft;
        console.log(links);
        var headlinesWidth = headlines.offsetWidth;
        var tickerWidth = ticker.offsetWidth;
        var linkWidth =
            step < 0
                ? links[0].offsetWidth
                : links[links.length - 1].offsetWidth;
        var animId;

        headlines.addEventListener("mouseenter", function (e) {
            cancelAnimationFrame(animId);
        });

        headlines.addEventListener("mouseleave", function () {
            moveHeadlines();
        });

        moveHeadlines();

        function moveHeadlines() {
            curX += step;
            if (step < 0 && curX < -linkWidth) {
                curX += linkWidth;
                headlines.appendChild(links[0]);
                linkWidth = links[0].offsetWidth;
            }
            if (step > 0 && curX + headlinesWidth > tickerWidth + linkWidth) {
                curX -= linkWidth;
                headlines.insertBefore(links[links.length - 1], links[0]);
                linkWidth = links[links.length - 1].offsetWidth;
            }
            headlines.style.left = curX + "px";
            animId = requestAnimationFrame(moveHeadlines);
        }
    }
})();
