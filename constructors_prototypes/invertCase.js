function invertCase(string) {
    var result = "";
    for (var i = 0; i < string.length; i++) {
        var c = string.charAt(i);
        result += c == c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
    }
    return result;
}

console.log(invertCase("this iS a TeSt 523 Now!"));
console.log(invertCase("tHIs Is AnOth3r TeSt!!!? Now///"));
