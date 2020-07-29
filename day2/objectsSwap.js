var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA",
};

var b = {};

for (var k in a) {
    b[a[k]] = k;
}
console.log(b);
