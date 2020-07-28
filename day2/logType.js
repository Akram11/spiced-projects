function logType(arg) {
    switch (typeof arg) {
        case "undefined":
            return "undefined!";
        case "string":
            return "String!";
        case "number": {
            return Number.isNaN(arg) ? "Not A Number!" : "Number!";
        }
        case "function":
            return "function!";
        case "boolean":
            return "bool";
        case "bigint":
            return "bigint!";
        case "object": {
            if (arg == null) {
                return "null!";
            } else if (Array.isArray(arg)) {
                return "array!";
            }
            return "object!";
        }
        default:
            return "I have no idea!";
    }
}

console.log(logType(undefined));
console.log(logType(null));
console.log(logType(2));
console.log(logType(NaN));
console.log(logType(""));
console.log(logType(false));
console.log(logType(BigInt(100)));
console.log(logType(1234567890123456789012345678901234567890n));
console.log(logType(function () {}));
console.log(logType({}));
console.log(logType([]));
