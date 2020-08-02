function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}

Rectangle.prototype.getArea = function () {
    return this.width * this.height;
};

function Square(side) {
    Rectangle.call(this, side, side);
}
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Rectangle;

var rec1 = new Rectangle(3, 4);
console.log(rec1.getArea());
var square1 = new Square(6);
console.log(square1.getArea());
