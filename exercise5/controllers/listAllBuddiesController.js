let fs = require('fs');
const logger = require('./logger');

const listAllBuddy = (req,res) => {
    fs.readFile('./cdw_ace23_buddies.json','UTF-8',(err,data) => {
        if(err){
            logger.error(err)
            console.log(err);
        }
        else{
            const array = JSON.parse(data);
            res.send(array);
        }
    });
}

module.exports = listAllBuddy;