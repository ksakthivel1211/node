let fs = require('fs');

const deleteBuddy = (req,res) => {
    fs.readFile('./cdw_ace23_buddies.json','UTF-8',(err,data) => {
        if(err)
            console.log(err);
        else{
            const body = req.body;
            const array = JSON.parse(data);

            let position = array.findIndex(element => element.employeeId === body.employeeId);
            array.splice(position,1);

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

module.exports = deleteBuddy;