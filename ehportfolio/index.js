const express = require("express");
const app = express();
const handlebars = require("express-handlebars");

app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
    res.render("hello", {
        name: "Akram",
    });
});

app.listen(8080, () => {
    console.log("server is listening");
});
