function logType(arg) {
    switch (typeof arg) {
        case "undefined":
            console.log("undefined!");
        case "string":
            console.log("String!");
        case "number": {
            console.log(Number.isNaN(arg) ? "Not A Number!" : "Number!");
        }
        case "function":
            console.log("function!");
        case "boolean":
            console.log("bool");
        case "bigint":
            console.log("bigint!");
        case "object": {
            if (arg == null) {
                console.log("null!");
            } else if (Array.isArray(arg)) {
                console.log("array!");
            }
            console.log("object!");
        }
        default:
            console.log("I have no idea!");
    }
}

logType(undefined);
logType(null);
logType(2);
logType(NaN);
logType("");
logType(false);
logType(BigInt(100));
logType(1234567890123456789012345678901234567890n);
logType(function () {});
logType({});
logType([]);
