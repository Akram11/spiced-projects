const chalk = require("chalk");
const url = require("url");
const querystring = require("querystring");

let { protocol, host, hostname, port, path, query } = url.parse(
    process.argv.slice(2) + ""
);

let q = querystring.decode(query);
console.log(typeof path);
let urlObj = { protocol, host, hostname, port, path, query };

for (const [key, value] of Object.entries(urlObj)) {
    console.log(
        `The ${chalk.bgYellow.red.bold(` ${key} `)} is ${chalk.bold(value)}`
    );
}
for (const [key, value] of Object.entries(q)) {
    console.log(
        `The value of ${chalk.bgYellow.red.bold(
            ` ${key} `
        )} parameter is ${chalk.bold(value)}`
    );
}
