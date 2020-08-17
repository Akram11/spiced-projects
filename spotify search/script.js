(function () {
    var submitButton = $(".submit-button");
    var showButton = $(".show-more");
    var nextUrl;

    function ajaxCall(url, input, choice) {}
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
                var resultsCards = "";
                for (var i = 0; i < payload.items.length; i++) {
                    console.log(payload.items[i].images);
                    resultsCards += `<a class="artist-card" href="${
                        payload.items[i].external_urls.spotify
                    }"><img class="artist-img" src="${
                        payload.items[i].images.length == 0
                            ? "https://developer.spotify.com/assets/branding-guidelines/icon3@2x.png"
                            : payload.items[i].images[0].url
                    }">
                    <p>  ${payload.items[i].name}  </p> </a>`;
                }
                if (payload.total > 20) {
                    showButton.addClass("show");
                }

                $(".results-container").html(resultsCards);
            },
        });
    });
})();
