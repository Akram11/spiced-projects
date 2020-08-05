var cx = document.getElementById("canv").getContext("2d");
var pcx = document.getElementById("parent").getContext("2d");

var x = 0;
var y = 0;

cx.beginPath();
cx.strokeStyle = "blue";
cx.arc(400, 100, 50, 0, 2 * Math.PI);
drawline(400, 150, 400, 350); //body
drawline(400, 150, 480, 200); //right arm
drawline(400, 150, 320, 200); //left arm
drawline(400, 350, 480, 450); //right leg
drawline(400, 350, 320, 450); //left leg

function drawline(mx, my, lx, ly) {
    cx.moveTo(mx, my);
    cx.lineTo(lx, ly);
    cx.stroke();
}

pcx.drawImage(document.getElementById("canv"), x, y);

window.onkeydown = function (event) {
    var keyPr = event.keyCode;

    if (keyPr === 39 && x <= 320) {
        x = x + 20;
    } else if (keyPr === 37 && x > -320) {
        x = x - 20;
    } else if (keyPr === 38 && y > -40) {
        y = y - 20;
    } else if (keyPr === 40 && y < 150) {
        y = y + 20;
    }
    pcx.clearRect(0, 0, 800, 600);
    pcx.drawImage(document.getElementById("canv"), x, y);
};
