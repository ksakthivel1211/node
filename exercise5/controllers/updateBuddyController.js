let fs = require('fs');
const logger = require('../logger');

const updateBuddy = (req,res) => {
    fs.readFile('./cdw_ace23_buddies.json','UTF-8',(err,data) => {
        if(err){
            logger.error(err)
            console.log(err);
        }
        else{
            let position;
            const array = JSON.parse(data);
            array.forEach((element,index)=> {
                if(element.employeeId == req.body.employeeId)
                {
                    position=index;
                }
            });
            array[position]=req.body;
            fs.writeFile('./cdw_ace23_buddies.json',JSON.stringify(array),(err) => {
                if(err){
                    logger.error(err)
                    console.log(err);
                }
                else{
                    res.send(array);
                }
            });
        }
    });
}

module.exports = updateBuddy;