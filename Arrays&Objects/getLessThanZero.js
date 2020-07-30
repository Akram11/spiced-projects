var originalArray = [8, -9, -3, 13, -34, 54, 1];

function getLessThanZero(array) {
    return array.filter(function (x) {
        return x < 0;
    });
}

var newArray = getLessThanZero(originalArray);
console.log(newArray);
