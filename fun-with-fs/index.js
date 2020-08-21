const fs = require("fs");
const fullPath = __dirname;

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
