$("#validator").on("click", function () {
    try {
        JSON.parse($("textarea").val());
    } catch (e) {
        alert("not a valid JSON string");
        return;
    }
    alert("Valid JSON string");
});
