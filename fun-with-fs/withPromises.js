const { readdir, stat } = require("fs").promises;
const fullPath = __dirname;

const logSizes = (dir) => {
    readdir(dir, { withFileTypes: true })
        .then((files) => {
            files.forEach((item) => {
                stat(dir + "/" + item.name).then((file) => {
                    if (file.isFile()) {
                        console.log(dir + "/" + item.name + " : " + file.size);
                    } else if (file.isDirectory()) {
                        console.log(dir + "/" + item.name + " : " + file.size);
                        logSizes(dir + "/" + item.name);
                    }
                });
            });
        })
        .catch((err) => {
            console.log("error in LogSizes", err);
        });
};

logSizes(fullPath);
