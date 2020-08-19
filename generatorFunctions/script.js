function* fizzBuzzGen(start = 1, end = 100) {
    for (var i = start; i <= end; i++) {
        yield FizzOrBuzz(i);
    }
}

let FizzOrBuzz = (i) => {
    return i % 3 === 0
        ? i % 5 === 0
            ? "FizzBuzz"
            : "Fizz"
        : i % 5 === 0
        ? "Buzz"
        : i;
};

const iterator = fizzBuzzGen();

for (let n of iterator) {
    console.log(n);
}

///////////////////SECOND EXERCISE//////////////////////////////////////////////////////

function* reverseArray(arr) {
    let array = [...arr].reverse();
    for (let i = 0; i < array.length; i++) {
        yield array[i];
    }
}

const iterator2 = reverseArray([5, 4, 3, 2, 1]);

console.log(iterator2.next().value);
console.log(iterator2.next().value);

////////////////BONUS////////////////TOBE COMPLETED

// function makeAwierdArray(args) {
//     let arr = [];
//     let iterator = {
//         [Symbol.iterator]: function* () {
//             for (const key in this) {
//                 yield this[key].name;
//             }
//         },
//     };
// }
// let a = makeAwierdArray(1, 2, 3, 4, 9, 6, 7);
// console.log("restuls", [...a]);
