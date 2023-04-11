let fs = require('fs');
const logger = require('../logger');
const {updateBuddyinfo} = require('../services/updateService')

const updateBuddy = async (req,res) => {
    logger.info(`START :: Update Buddy controller`);
    if(req.body.employeeID !== undefined && req.body.employeeID !== null && Number.isInteger(eq.body.employeeID)  &&  req.body.realName !== undefined && req.body.realName !== null &&
    req.body.nickName !== undefined && req.body.nickName !== null && (req.body.dob instanceof Date) && req.body.dob !== null &&
    req.body.hobbies !== undefined && req.body.hobbies !== null)
    {
    const responseData = await updateBuddyinfo(req, res);
    logger.info(`${responseData.status}`);
    res.status(responseData.code).send(responseData.message);
    }
    else{
        res.status(204).send(response.noRecords);
    }
    logger.info(`END :: update Buddy controller`);


}

module.exports = updateBuddy;