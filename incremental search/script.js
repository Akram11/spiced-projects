/* eslint-disable indent */
var input = $("#input");
var results = $("#results");
var timer;

function search() {
    return function () {
        // var matches = [];
        var value = input.val();
        var resultsHTML = "";
        var matches;
        function ajaxCall() {
            $.ajax({
                url: "https://flame-egg.glitch.me/",
                data: {
                    q: value,
                },
                success: function (data) {
                    if (value !== input.val()) {
                        return;
                    }
                    if (value === "" && !data.length) {
                        results.empty();
                        return;
                    } else {
                        matches = data;
                        if (!matches.length) {
                            resultsHTML = "no results";
                        } else {
                            matches.forEach(function (match) {
                                resultsHTML += `<div class = 'country' > ${match}</div>`;
                            });
                        }
                    }
                    results.html(resultsHTML);
                },
                error: function (err) {
                    console.log(err);
                },
            });
        }
        clearTimeout(timer);
        timer = setTimeout(ajaxCall, 3000);
    };
}

results
    .on("mouseover", ".country", function () {
        $(this).addClass("highlight");
        // console.log($(this).find(".country"));
    })
    .on("mouseout", ".country", function () {
        $(this).removeClass("highlight");
    });

results.on("mousedown", function (e) {
    input.val(e.target.innerHTML.trim());
    results.empty();
});

input.on("keydown", function (e) {
    var currentResult = $(".country");

    switch (e.keyCode) {
        case 40:
            if (!currentResult.hasClass("highlight")) {
                currentResult.first().addClass("highlight");
            } else if (currentResult.last().hasClass("highlight")) {
                break;
            } else {
                $(".highlight")
                    .removeClass("highlight")
                    .next()
                    .addClass("highlight");
            }
            break;
        case 38:
            if (!currentResult.hasClass("highlight")) {
                currentResult.last().addClass("highlight");
            } else if (currentResult.first().hasClass("highlight")) {
                break;
            } else {
                $(".highlight")
                    .removeClass("highlight")
                    .prev()
                    .addClass("highlight");
            }
            break;
        case 13:
            input.val($(".highlight")[0].innerHTML.trim());
            results.empty();
            break;
        default:
            break;
    }
});

input.on("blur", function () {
    results.empty();
});

input.on("input focus", search());
