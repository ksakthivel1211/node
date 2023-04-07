let fs = require('fs');
let http = require('http');
let file = require("./color_ palette.json");

http.createServer((req, res, err) => {
    if (req.url != "/favicon.ico") {
        if(file.length>5)
        {
        let notes = [];

        while (notes.length <= 5) {
            let value = file[Math.floor(Math.random() * file.length)]
            if (notes.indexOf(value) == -1) {
                notes.push(value);
            }
        }
        let result = JSON.stringify(notes);

        if (!notes) {
            res.end("Array is Empty");
        }
        else {
            fs.writeFile("./randomColor.json", result, (err) => {
                if (err)
                    console.log(err);
                else
                    fs.readFile("randomColor.json", "UTF-8", (err, data) => {
                        if (err)
                            console.log(err);
                        else {
                            res.write(data);
                            res.end();
                        }
                    });
            });
        }
    }
    else{
        res.end("Number of input is less than the requirement");
    }
    }

}).listen(4002);