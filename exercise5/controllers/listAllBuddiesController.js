let fs = require('fs');
const logger = require('../logger');
const {listBuddy} = require('../services/listAllService');

const listAllBuddy = async (req, res) => {
    // Logger info at end
    fileLogger.info(`START:: Display All Buddies Controller. ${req.originalUrl} - ${req.method} - ${req.ip}`);
    
    const responseData = await listBuddy(req, res);

    fileLogger.info(`END:: Display All Buddies Controller. ${req.originalUrl} - ${req.method} - ${req.ip}`);
    res.status(responseData.code).send(responseData.message);
}

module.exports = listAllBuddy;