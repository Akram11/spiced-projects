const http = require("http");
const fs = require("fs");
const path = require("path");
const { projectList } = require("./part2.js");

http.createServer((req, res) => {
    if (req.method != "GET") {
        res.statusCode = 405;
        return res.end();
    }

    const extensionsObject = {
        ".html": "text/html",
        ".css": "text/css",
        ".js": "text/javascript",
        ".json": "application/json",
        ".gif": "image/gif",
        ".jpg": "image/jpeg",
        ".png": "image/png",
        ".svg": "image/svg+xml",
    };
    // gives us the full path of where the user is trying to go to
    const filePath = __dirname + "/projects" + encodeURI(req.url);
    console.log(filePath);
    // console.log(projectList(filePath));

    // this protects users for directory traversal attacks!
    if (!path.normalize(filePath).startsWith(__dirname + "/projects")) {
        res.statusCode = 403; // forbidden
        console.log("INTRUDER ALERT");
        return res.end();
    }

    // if url is a directory, serve the index.html file in there
    // otherwise, serve the file being requested
    fs.stat(filePath, (err, stats) => {
        if (err) {
            console.log(err);
            res.statusCode = 404;
        }

        // we have to check whether it's a file or a directory
        if (stats.isFile()) {
            const contentType = extensionsObject[path.extname(filePath)];
            const stream = fs.createReadStream(filePath);
            res.setHeader("Content-Type", contentType);
            stream.pipe(res);
            stream.on("error", (err) => {
                console.log(err);
                res.statusCode = 500;
                res.end();
            });
        } else {
            if (req.url === "/") {
                res.writeHeader(200, { "Content-Type": "text/html" });
                res.end(projectList());
            }
            // if url ends with slash, serve index.html file
            else if (req.url.endsWith("/")) {
                const readStreamHtml = fs.createReadStream(
                    filePath + "index.html"
                );
                res.setHeader("Content-Type", "text/html");
                readStreamHtml.pipe(res);

                readStreamHtml.on("error", (err) => {
                    console.log(err);
                    res.statusCode = 500;
                    res.end();
                });
            } else {
                res.writeHead(302, {
                    "Location": req.url + "/",
                });
                res.end();
            }
        }
    });
}).listen(8080, () => console.log("portfolio server is running..."));
