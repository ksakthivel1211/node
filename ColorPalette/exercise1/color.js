let fs = require('fs');
let http = require('http');
let file = require("./color_ palette.json");

http.createServer((req, res, err) => {
    if (req.url != "/favicon.ico") {
        
        let notes = [];
        for (let i = 0; i < 5; i++) {
            notes.push(file[Math.floor(Math.random() * file.length)]);
        }
        let result = JSON.stringify(notes);
        
        fs.writeFile("randomColor.json", result, (err) => {
            if (err)
                console.log(err);
            else
                fs.readFile("randomColor.json", "UTF-8", (err, data) => {
                    if (err)
                        console.log(err);
                    else {
                        console.log(data);
                        res.end();
                    }
                });
        });
        
    }

}).listen(4001);