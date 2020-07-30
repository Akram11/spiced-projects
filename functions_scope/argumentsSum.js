function argumentsSum() {
    var sum = 0;
    for (var arg in arguments) {
        sum += arguments[arg];
    }
    return sum;
}

// function argumentsSum(...args) {
//     return args.reduce((acc, curr) => {
//         return (acc += curr);
//     });
// }
//^ just wrote this to test if I remember how it should work this way
console.log(argumentsSum(1, 2, 4, 5));
console.log(argumentsSum(5, 10));
console.log(argumentsSum(5, 10, 15));
console.log(argumentsSum(5, 10, 15, 100, 200));
