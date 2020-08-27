const express = require("express");
const app = express();
const basicAuth = require("basic-auth");

const auth = function (req, res, next) {
    const creds = basicAuth(req);
    if (!creds || creds.name != "x" || creds.pass != "tu") {
        res.setHeader(
            "WWW-Authenticate",
            'Basic realm="Enter your credentials to see this stuff."'
        );
        res.sendStatus(401);
    } else {
        next();
    }
};

app.use(require("cookie-parser")());
app.use(express.urlencoded({ extended: false }));

app.use(function (req, res, next) {
    if (!req.cookies.auth && req.url !== "/cookies") {
        res.cookie("redirectURL", req.url);
        res.redirect("/cookies");
    } else {
        next();
    }
});
app.use(express.static(__dirname + "/portfolio/projects"));

app.get("/", (req, res) => {
    res.redirect("/connect4");
});

app.get("/cookies", (req, res) => {
    res.send(
        `<form method="post">
        <h3>
        to use this site you must accept cookies first! Do you agree to
        use cookies?
        </h3>
        <div>
        <input type="checkbox" name="cookies" />
        <span>yes, I agree to use cookies</span>
        </div>
        <button> submit </submit>
        </form>`
    );
});

app.post("/cookies", (req, res) => {
    const { cookies } = req.body;
    if (cookies) {
        res.cookie("auth", true);
        res.redirect(req.cookies.redirectURL);
    } else {
        res.send(
            `<h1>You can't browse this site without accepting cookies </h1>`
        );
    }
});
app.use(auth);
app.use(express.static(__dirname + "/portfolio/secure"));

app.listen(8080, () => console.log("Server Listening!"));
