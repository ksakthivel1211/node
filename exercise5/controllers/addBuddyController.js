
const logger = require('../logger');
const {addBuddyDetails} = require('../services/addService');

const addBuddy = async (req, res) => {
    logger.info(`START :: Add Buddy controller`);
    if(req.body.employeeID !== undefined && req.body.employeeID !== null && Number.isInteger(eq.body.employeeID)  &&  req.body.realName !== undefined && req.body.realName !== null &&
    req.body.nickName !== undefined && req.body.nickName !== null && (req.body.dob instanceof Date) && req.body.dob !== null &&
    req.body.hobbies !== undefined && req.body.hobbies !== null)
    {
    const responseData = await addBuddyDetails(req, res);
    logger.info(`${responseData.status}`);
    res.status(responseData.code).send(responseData.message);
}
else{
    res.status(204).send(response.noRecords);
}
    logger.info(`END :: Add Buddy controller`);
};

module.exports = addBuddy;
