
let { createServer } = require('http');
let file = require("./color_ palette.json");

let writeFileData = require('./writeFileData');

let readFileData = require('./readFileData');


createServer((req, res, err) => {

    if (req.url != "/favicon.ico") {
        let notes = [];
        let random = require('random-number');
        var options = {
            min: 0
            , max: file.length
            , integer: true
        }
        for (let i = 0; i < 5; i++) {
            notes.push(file[Math.floor(random(options))]);
        }
        let result = JSON.stringify(notes);
        writeNewFileData();
        async function writeNewFileData() {
            await writeFileData.writeFileData(result);
        }
        readNewFileData();
        async function readNewFileData() {
            let data = await readFileData.readFileData();
            console.log(data);
        }
    }
    res.end();
}).listen(4001);