const fs = require("fs");

module.exports.projectList = function () {
    // get a list of all your projects that are inside your projects folder (you'll get an array of names)
    // loop through your list and create a string of html and a link for each item in the directory
    // make sure you RETURN the completed html string

    let htmlStr = "";
    let filesObj = fs.readdirSync(__dirname + "/projects", {
        withFileTypes: true,
    });

    filesObj.forEach(
        (file) =>
            (htmlStr += `<li><a href="${file.name}">${file.name}<a/></li>`)
    );

    return htmlStr;
};
