(function () {
    $.ajax({
        url: "/data.json",
        method: "GET",
        success: function (response) {
            //console.log('response: ', response);

            var myHtml = "";
            for (var i = 0; i < response.length; i++) {
                // console.log(response[i]);

                var city = "<div>" + response[i].city + "</div>";
                myHtml += city;
            }

            $("#results").html(myHtml);
        },
        error: function (err) {
            console.log("err", err);
        },
    });
})();
