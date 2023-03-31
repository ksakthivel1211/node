let fs = require('fs');

const listAllBuddy = (req,res) => {
    fs.readFile('./cdw_ace23_buddies.json','UTF-8',(err,data) => {
        if(err)
            console.log(err);
        else{
            const array = JSON.parse(data);
            res.send(array);
        }
    });
}

module.exports = listAllBuddy;