(function () {
    var currentPlayer = "player1";
    $(".column").on("click", function (e) {
        var col = $(e.currentTarget);
        var slotsInCol = col.children();

        for (var i = slotsInCol.length - 1; i >= 0; i--) {
            var alreadyPlayer1 = !slotsInCol.eq(i).hasClass("player1");
            var alreadyPlayer2 = !slotsInCol.eq(i).hasClass("player2");
            if (alreadyPlayer1 && alreadyPlayer2) {
                var forward = col.index() + i;
                var backward = col.index() - i;
                slotsInCol
                    .eq(i)
                    .addClass(currentPlayer)
                    .addClass("f" + forward)
                    .addClass("b" + backward);

                // .addClass("" + col.index() - i);
                break;
            }
        }

        if (i === -1) {
            return;
        }
        var slotsInforwarDiagonal = $(".f" + forward);
        var slotsInbackwardDiagonal = $(".b" + backward);

        var slotsInRow = $(".row" + i).parent();

        if (checkForVictory(slotsInCol)) {
            openModal(currentPlayer + " has won!");
        } else if (checkForVictory(slotsInRow)) {
            console.log("win ROW");
        } else if (checkForVictory(slotsInforwarDiagonal)) {
            console.log("Win Diagonal forward");
        } else if (checkForVictory(slotsInbackwardDiagonal)) {
            console.log("Win Diagonal Backward");
        } else {
            switchPlayer();
        }
    });

    function checkForVictory(slots) {
        console.log(slots.length);
        if (slots.length < 4) {
            return;
        }
        var count = 0;

        for (var j = 0; j < slots.length; j++) {
            if (slots.eq(j).hasClass(currentPlayer)) {
                count++;
                if (count === 4) {
                    return true;
                }
            } else {
                count = 0;
            }
        }
    }

    function switchPlayer() {
        currentPlayer === "player1"
            ? (currentPlayer = "player2")
            : (currentPlayer = "player1");
    }

    var modal = $("#modal");
    var overlay = $("#modal-overlay");
    var winnerText = $("#winner");

    function closeModal() {
        modal.addClass("closed");
        overlay.addClass("closed");
    }
    function openModal(text) {
        winnerText.append(text);
        modal.removeClass("closed");
        overlay.removeClass("closed");
    }
})();
