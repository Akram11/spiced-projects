const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const projects = require("./projects.json");

const hbSet = handlebars.create({
    helpers: {
        isActive(path, url) {
            return path == url;
        },
    },
});

app.engine("handlebars", hbSet.engine);
app.set("view engine", "handlebars");

app.use(express.static("./projects"));
app.use(express.static("./public"));

app.get("/", (req, res) => {
    res.render("welcome", {
        projects,
    });
});

app.get("/projects/:project", (req, res) => {
    const { project } = req.params;
    const selectedProject = projects.find((p) => p.path === "/" + project);
    if (!selectedProject) {
        return res.sendStatus(404);
    }
    res.render("description", {
        selectedProject,
        projects,
    });
});

app.listen(8080, () => {
    console.log("server is listening");
});
