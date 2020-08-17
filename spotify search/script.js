(function () {
    var submitButton = $(".submit-button");
    var nextUrl;

    submitButton.on("click", function () {
        var userInput = $("input[name='search']").val();
        var artistOrAlbum = $(".artist-or-album").val();
        $.ajax({
            url: "https://spicedify.herokuapp.com/spotify",
            data: {
                query: userInput,
                type: artistOrAlbum,
            },
            success: function (payload) {
                payload = payload.artists || payload.albums;
                console.log(payload);

                if (payload.next) {
                    nextUrl = payload.next.replace(
                        "https://api.spotify.com/v1/search",
                        "https://spicedify.herokuapp.com/spotify"
                    );
                }

                $(".results-for").html(
                    `${
                        payload.items.length
                            ? `Ruslts for: ${userInput}`
                            : `NO Ruslts for: ${userInput}`
                    }`
                );
                var names = "";
                for (var i = 0; i < payload.items.length; i++) {
                    names += "<p>" + payload.items[i].name + "</p>";
                } // closes for loop

                $(".results-container").html(names);
            },
        });
    });
})();
