var headlines = document.getElementById("headlines");
var leftValue = headlines.offsetLeft;

(function () {
    $.ajax({
        url: "./data.json",
        method: "GET",
        // add_header: "Access-Control-Allow-Origin",
        success: function (response) {
            //console.log('response: ', response);

            var myHtml = "";
            for (var i = 0; i < response.length; i++) {
                // console.log(response[i]);

                var a =
                    '<a href="' +
                    response[i].link +
                    '">' +
                    response[i].title +
                    "</a>";
                myHtml += a;
            }

            $("#headlines").html(myHtml);

            var links = document.getElementsByTagName("a");
            var animation;

            for (var i = 0; i < links.length; i++) {
                links[i].addEventListener("mouseenter", function () {
                    cancelAnimationFrame(animation);
                });

                links[i].addEventListener("mouseleave", function () {
                    requestAnimationFrame(moonwalk);
                });
            }

            function moonwalk() {
                leftValue--;

                if (leftValue < -links[0].offsetWidth) {
                    leftValue += links[0].offsetWidth;
                    headlines.appendChild(links[0]);
                }

                headlines.style.left = leftValue + "px";

                animation = requestAnimationFrame(moonwalk);
            }

            moonwalk();
        },
        error: function (err) {
            console.log("err", err);
        },
    });
})();
