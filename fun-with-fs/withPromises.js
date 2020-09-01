const { readdir, stat } = require("fs").promises;
const fullPath = __dirname;

const logSizes = (dir) => {
    readdir(dir, { withFileTypes: true }).then((files) => {
        files.forEach((item) => {
            stat(dir + "/" + item.name).then((file) => {
                file.isFile()
                    ? console.log(dir + "/" + item.name + " : " + file.size)
                    : console.log(dir + "/" + item.name + " : " + file.size);
                // logSizes(dir + "/" + item.name);
            });
        });
    });
};

logSizes(fullPath);
