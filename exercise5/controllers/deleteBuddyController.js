const logger = require('../logger');
const {deleteBuddyService} = require('../services/deleteService');

const deleteBuddyDetails = async (req, res) => {
    logger.info(`START :: Delete Buddy controller`);
    if (req.body !== undefined && req.body !== null && Number.isInteger(eq.body)) 
    {
    const responseData = await deleteBuddyService(req, res);
    logger.info(`${responseData.status}`);
    res.status(responseData.code).send(responseData.message);
} 
else {
  res.status(204).send(response.noRecords);
}
    logger.info(`END :: Delete Buddy controller`);
}

module.exports = deleteBuddyDetails;