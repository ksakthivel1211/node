let fs = require('fs');
const listBuddy = (req,res) => {
    fs.readFile('./cdw_ace23_buddies.json','UTF-8',(err,data) => {
        if(err)
            console.log(err);
        else{
            const array = JSON.parse(data);
            // console.log(req.body.employeeId);
            res.send(array[req.body.employeeId-1]);
        }
    });
}

module.exports = listBuddy;