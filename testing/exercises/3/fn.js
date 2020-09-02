module.exports = function fn(value) {
    if (Array.isArray(value)) {
        let result = [];
        value.forEach((item) => {
            result.push(fn(item));
        });
        return result;
    } else if (typeof value === "string") {
        return value.split("").reverse().join("");
    } else {
        return null;
    }
};
