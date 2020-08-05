var cx = document.getElementById("canv").getContext("2d");

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
