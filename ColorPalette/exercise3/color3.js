// importing packages
let { createServer } = require('http');
let file = require("./color_ palette.json");
let random = require('random-number');
let writeFileData = require('./writeFileData');
let readFileData = require('./readFileData');

// creating server
createServer((req, res, err) => {

    if (req.url != "/favicon.ico") {
        let notes = [];
        var options = {
            min: 0
            , max: file.length
            , integer: true
        }

        // choosing random values
        while (notes.length <= 5) {
            let value = file[Math.floor(random(options))]
            if (notes.indexOf(value) == -1) {
                notes.push(value);
            }
        }

        let result = JSON.stringify(notes);

        // calling write function
        writeNewFileData();
        async function writeNewFileData() {
            await writeFileData.writeFileData(result);
        }

        // calling read function
        readNewFileData();
        async function readNewFileData() {
            let data = await readFileData.readFileData();
            console.log(data);
            res.write(data);
            res.end();
        }
    }

}).listen(4006);