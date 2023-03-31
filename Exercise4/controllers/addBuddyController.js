let fs = require('fs');

const addBuddy = (req,res) => {
    fs.readFile('./cdw_ace23_buddies.json','UTF-8',(err,data) => {
        if(err)
            console.log(err);
        else{
            const array = JSON.parse(data);
            array.push(req.body);
            fs.writeFile('./cdw_ace23_buddies.json',JSON.stringify(array),(err) => {
                if(err)
                    console.log(err);
                else{
                    res.send(array);
                }
            });
        }
    });
}

module.exports = addBuddy;