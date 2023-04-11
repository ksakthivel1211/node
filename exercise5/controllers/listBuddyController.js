let fs = require('fs');
const logger = require('../logger');
const {listBuddies} = require('../services/listAllService');
const listBuddy = async(req,res) => {
    logger.info(`START :: List Buddy controller`);
    fs.readFile('./cdw_ace23_buddies.json','UTF-8',async (err,data) => {
        if(err){
            logger.error(err)
        }
        else{                
        const responseData = await listBuddies(req, res);
        logger.info(`${responseData.status}`);
        res.status(responseData.code).send(responseData.message);
        }
    });
    logger.info(`END :: List Buddy controller`);
}

module.exports = listBuddy;