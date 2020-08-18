(function () {
    var submitButton = $(".submit-button");
    var artistOrAlbum = $(".artist-or-album").val();
    var input = $("input");
    var nextUrl;
    submitButton.on("click", function () {
        $.ajax({
            url: "https://spicedify.herokuapp.com/spotify",
            data: {
                query: input.val(),
                type: artistOrAlbum,
            },
            success: function (payload) {
                payload = payload.artists || payload.albums;

                setNextUrl(payload.next);

                $(".results-for").html(
                    `${
                        payload.items.length
                            ? `Results for: ${input.val()}`
                            : `NO Results for: ${input.val()}`
                    }`
                );

                $(".results-container").html(getResults(payload.items));

                if (payload.total > 20) {
                    $(".show-more").addClass("show");
                }
            },
        });
    });

    // $(document).on("click", ".show-more", function (e) {
    //     $.ajax({
    //         url: nextUrl,
    //         success: function (payload) {
    //             payload = payload.artists || payload.albums;
    //             setNextUrl(payload.next);
    //             $(".results-container").append(getResults(payload.items));
    //         },
    //     });
    // });

    $(window).scroll(function () {
        if (
            $(window).scrollTop() >=
            $(document).height() - $(window).height()
        ) {
            $.ajax({
                url: nextUrl,
                success: function (payload) {
                    payload = payload.artists || payload.albums;
                    setNextUrl(payload.next);
                    $(".results-container").append(getResults(payload.items));
                },
            });
        }
    });

    function setNextUrl(next) {
        nextUrl =
            next &&
            next.replace(
                "api.spotify.com/v1/search",
                "spicedify.herokuapp.com/spotify"
            );
    }

    function getResults(items) {
        var html = "";
        for (var i = 0; i < items.length; i++) {
            html += `<a class="artist-card" href="${
                items[i].external_urls.spotify
            }"><img class="artist-img" src="${
                items[i].images.length == 0
                    ? "https://developer.spotify.com/assets/branding-guidelines/icon3@2x.png"
                    : items[i].images[0].url
            }">
                    <p id = "name">  ${items[i].name}  </p> </a>`;
        }
        return html;
    }
})();
