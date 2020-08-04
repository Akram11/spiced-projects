function generateColor() {
    var chars = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += chars[Math.floor(Math.random() * chars.length)];
    }
    return color;
}

var square = document.querySelector("#color-me");
square.addEventListener("mousedown", function (e) {
    e.stopPropagation();
    this.style.backgroundColor = generateColor();
    this.style.borderColor = generateColor();
});

square.addEventListener("mouseup", function (e) {
    e.stopPropagation();
    this.style.backgroundColor = generateColor();
    this.style.borderColor = generateColor();
});

var parent = document.querySelector("#parent");
parent.addEventListener("mousedown", function () {
    this.style.backgroundColor = generateColor();
    this.style.borderColor = generateColor();
});

parent.addEventListener("mouseup", function () {
    this.style.backgroundColor = generateColor();
    this.style.borderColor = generateColor();
});
