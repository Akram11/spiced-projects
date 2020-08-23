const fs = require("fs");
const fullPath = __dirname;
console.log(fullPath);
const logSizes = (dir) => {
    fs.readdir(dir, { withFileTypes: true }, (err, files) => {
        if (err) {
            console.error(err);
        } else {
            files.forEach((item) => {
                fs.stat(dir + "/" + item.name, (err, stat) => {
                    if (err) {
                        console.error(err);
                    }
                    if (stat.isFile()) {
                        console.log(dir + "/" + item.name + " : " + stat.size);
                    } else if (stat.isDirectory()) {
                        console.log(dir + "/" + item.name + " : " + stat.size);
                        logSizes(dir + "/" + item.name);
                    }
                });
            });
        }
    });
};

logSizes(fullPath);

const mapSizes = (dir) => {
    let jsonObj = {};
    let fileObjs = fs.readdirSync(dir, { withFileTypes: true }, (err) => {
        console.log(err);
    });

    fileObjs.forEach((item) => {
        let size = fs.statSync(dir + "/" + item.name, (err) => console.log(err))
            .size;
        if (item.isFile()) {
            jsonObj[item.name] = size;
        } else if (item.isDirectory()) {
            jsonObj = {
                ...jsonObj,
                [item.name]: mapSizes(dir + "/" + item.name),
            };
        }
    });

    return jsonObj;
};

const strObj = JSON.stringify(mapSizes(fullPath), 4);
fs.writeFile("./files.json", strObj, function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});
console.log(strObj);
