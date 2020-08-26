const express = require("express");
const app = express();

app.use(require("cookie-parser")());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/portfolio/projects/connect4"));
app.use(express.static(__dirname + "/portfolio/projects/carousel"));
app.use(express.static(__dirname + "/portfolio/projects/spotify-search"));

app.use((req, res, next) => {
    if (req.cookies.auth) {
        console.log("this user has already accepted cookies");
    } else {
        // res.redirect("/");
    }
    next();
});

app.get("/connect4", (req, res) => {
    res.sendFile(__dirname + "/portfolio/projects/connect4/index.html");
});

app.get("/carousel", (req, res) => {
    res.sendFile(__dirname + "/portfolio/projects/carousel/index.html");
});

app.get("/spotify", (req, res) => {
    res.sendFile(__dirname + "/portfolio/projects/spotify-search/index.html");
});

app.get("/", (req, res) => {
    res.send(`<h1>hello express</h1>`);
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
        console.log("cookies should be added");
    }
    res.redirect("/");
});

app.listen(8080, () => console.log("Server Listening!"));
