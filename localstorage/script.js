$("textarea").on("input", function (e) {
    localStorage.setItem("text", $("textarea").val());
});

$(window).on("load", function () {
    $("textarea").val(localStorage.getItem("text"));
});
