const { readdir, stat } = require("fs").promises;
const fullPath = __dirname;

const logSizes = (dir) => {
    return new Promise((resolve, reject) => {
        let promises = [];
        readdir(dir, { withFileTypes: true })
            .then((files) => {
                files.forEach((item) => {
                    stat(dir + "/" + item.name).then((file) => {
                        if (file.isFile()) {
                            promises.push();
                            console.log(
                                dir + "/" + item.name + " : " + file.size
                            );
                        } else if (file.isDirectory()) {
                            console.log(
                                dir + "/" + item.name + " : " + file.size
                            );
                            promises.push(logSizes(dir + "/" + item.name));
                        }
                    });
                });
            })
            .catch((err) => {
                console.log("error in LogSizes", err);
            });
    });
};

logSizes(fullPath);
