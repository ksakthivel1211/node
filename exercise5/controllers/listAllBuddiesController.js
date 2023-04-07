const logger = require('../logger');
const {returnResponse}  = require('../utils/helper');
const listService = require('../services/listAllService');

const listAllBuddies = async (req, res) => {
    // Logger info at end
    fileLogger.info(`START:: Display All Buddies Controller. ${req.originalUrl} - ${req.method} - ${req.ip}`);
    
    const responseData = await listService.displayAllBuddies(req, res);

    fileLogger.info(`END:: Display All Buddies Controller. ${req.originalUrl} - ${req.method} - ${req.ip}`);
    res.status(responseData.code).send(responseData.message);
}


module.exports = listAllBuddies;