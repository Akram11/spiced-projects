const countries = require("./countries");

test("When passed an empty string, it returns an empty array", () => {
    expect(countries.find("")).toEqual([]);
    expect(countries.find(" ")).toEqual([]);
});

test("The array that it returns contains no more than four matches", () => {
    expect(countries.find("a").length).toBeLessThanOrEqual(4);
    expect(countries.find("Z").length).toBeLessThanOrEqual(4);
});

test("The search is case insensitive", () => {
    expect(countries.find("a")).toEqual(countries.find("A"));
    expect(countries.find("Z")).toEqual(countries.find("z"));
});

test("If there are no matching countries, an empty array is returned", () => {
    expect(countries.find("asdaffa")).toEqual([]);
    expect(countries.find("10")).toEqual([]);
});
