// (function () {
//     $("textarea").on("input", function (e) {
//         localStorage.setItem("text", $("textarea").val());
//     });

//     $(window).on("load", function () {
//         $("textarea").val(localStorage.getItem("text"));
//     });
// })();

(function () {
    try {
        $("textarea").val(localStorage.getItem("storedText"));
    } catch (e) {
        return;
    }

    $("textarea").on("input", function (e) {
        try {
            localStorage.setItem("storedText", $("textarea").val());
        } catch (e) {
            return;
        }
    });
})();
