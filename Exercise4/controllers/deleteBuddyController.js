let fs = require('fs');

const deleteBuddy = (req,res) => {
    fs.readFile('./cdw_ace23_buddies.json','UTF-8',(err,data) => {
        if(err)
            console.log(err);
        else{
            const body = req.body;
            const array = JSON.parse(data);
            // array.push(body);
            
            let position = array.findIndex(element => element.employeeId === body.employeeId);
            console.log(position);
            array.splice(position,1);

            res.send(array);
        }
    });
}

module.exports = deleteBuddy;