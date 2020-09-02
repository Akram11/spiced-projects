const countries = require("./countries");

test("When passed an empty string, it returns an empty array", () => {
    expect(countries.find("")).toEqual([]);
    expect(countries.find(" ")).toEqual([]);
});

test("The array that it returns contains no more than four matches", () => {
    expect(countries.find("a").length).toBe(4);
    expect(countries.find("Z").length).toBe(4);
});
// console.log(countries.find(" "));
