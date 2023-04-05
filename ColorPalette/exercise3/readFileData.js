let { readFile } = require("fs");

// file reading function
let readFileData = function () {
    return new Promise((resolve, reject) => {
        readFile("randomColor.json", "utf-8", (err, data) => {
            if (err) {
                console.log(err);
                reject("File not readed..!!!");
            } else {
                resolve(data);
            }
        });
    })
        .then((data) => {
            return data;
        })
        .catch((err) => {
            return err;
        });
};

module.exports = { readFileData };
