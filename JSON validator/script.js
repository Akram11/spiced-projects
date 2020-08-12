$("#validator").on("click", function () {
    try {
        JSON.parse($("textarea").val());
    } catch (e) {
        alert("not a valid JSON string");
    }
    alert("Valid JSON string");
});
