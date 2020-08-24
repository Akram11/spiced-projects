const http = require("http");

const server = http
    .createServer((req, res) => {
        res.on("error", (err) => console.error(err));
        req.on("error", (err) => console.error(err));
        const { method, url, headers } = req;

        console.log(method, url, headers);

        if (method === "HEAD") {
            res.statusCode = 200;
            res.end();
        } else if (method === "GET") {
            res.statusCode = 200;
            res.end(`
            <html>
            <title>Hello World!</title>
            <p>Hello World!
            </html>
            `);
        } else if (method === "POST") {
            console.log("you made a POST request");
            let body = "";
            req.on("data", (chunk) => {
                body += chunk;
            });

            req.on("end", () => {
                console.log("body: ", body);
                res.setHeader("Location", "/amazing");
                res.statusCode = 302;
                res.end(
                    `<h1> POST request has successfully been completed :) </h1>`
                );
            });
        } else {
            res.statusCode = 404;
        }
    })
    .listen(8080, () => console.log("server listening on..."));
