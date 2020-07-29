function millionsLogger(n) {
    if (n <= 0 || isNaN(n)) {
        console.log("error!");
        return;
    }
    return n >= 1000000 ? n : millionsLogger(n * 10);
}

console.log(millionsLogger(-15));
console.log(millionsLogger("100"));
console.log(millionsLogger(100));
console.log(millionsLogger(100));
console.log(millionsLogger(90));
