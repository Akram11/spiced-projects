const reveresArray = (arr) => [...arr].reverse();
const concatArrays = (arr1, arr2) => [...arr1, ...arr2];

// console.log(reveresArray([3, 2, 4, 9]));
// console.log(concatArrays([3, 2, 5, 6], [7, 8, 0, 9]));

const logcity = (city) => {
    let { name, country, population: numPeople } = city;
    console.log(`${name} is in ${country} and has ${numPeople} in it.`);
};

const logcity2 = ({ name, country, population: numPeople }) => {
    console.log(`${name} is in ${country} and has ${numPeople} in it.`);
};

// console.log(
//     logcity({
//         name: "Berlin",
//         country: "Germany",
//         population: "a couple of millions",
//     }),
//     logcity2({
//         name: "Berlin",
//         country: "Germany",
//         population: "a couple of millions",
//     })
// );
//

// let getNameAndCountry = ({ name, country }) => [name, country];

var getNameAndCountry = function (obj) {
    var arr = [];
    for (var key in obj) {
        arr.push(obj[key]);
    }
    return arr;
};

// console.log(getNameAndCountry({ name: "berlin", country: "Germany" }));

// let getRelocatedCity = (city1, city2 = { country: "Germany" }) => {
//     let [, country] = getNameAndCountry(city2);
//     return {
//         ...city1,
//         country,
//     };
// };

var getRelocatedCity = function (city1, city2) {
    var country = "";
    if (!city2.hasOwnProperty("country")) {
        country = "Germany";
    } else {
        country = getNameAndCountry(city2)[1];
    }
    return {
        name: city1.name,
        country: country,
    };
};
console.log(
    getRelocatedCity(
        { name: "Vienna", country: "Austria" },
        { city1: "ny", country: "Zimbabwe" }
    )
);
