
const logger = require('../logger');
const {addBuddyDetails} = require('../services/addService');
const response = require('../response');
const addBuddy = async (req, res) => {
    logger.info(`START :: Add Buddy controller`);
    if(req.body.employeeId !== undefined && req.body.employeeId !== null &&  req.body.realName !== undefined && req.body.realName !== null &&
    req.body.nickName !== undefined && req.body.nickName !== null && req.body.dob !== null &&
    req.body.hobbies !== undefined && req.body.hobbies !== null)
    {
    const responseData = await addBuddyDetails(req, res);
    logger.info(`${responseData.status}`);
    res.send(responseData.message);
}
else{
    res.status(204).send(response.noRecords);
}
    logger.info(`END :: Add Buddy controller`);
};

module.exports = addBuddy;
