var x = 117;
var doubleX;

function timesTwo(n) {
    return n * 2;
}

doubleX = timesTwo(x);

var numbers = [x, doubleX];

numbers.forEach(function (x) {
    console.log(x);
});

numbers = {};
numbers.y = doubleX;
//
