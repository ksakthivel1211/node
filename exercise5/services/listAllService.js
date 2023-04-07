const {readJSONData, returnResponse} = require('../utils/helper');
const response = require('../response');
const logger = require('../logger');

const displayAllBuddies = async (req, res) => {
    logger.info(`START:: Display All Buddies Services. ${req.originalUrl} - ${req.method} - ${req.ip}`);
    let responseData;
    try {
        const buddiesData = await readJSONData('./assets/cdw_ace23_buddies.json');
        if(buddiesData.length > 0) {
            responseData = returnResponse(
                "SUCCESS",
                buddiesData,
                200
            );
        }
        else {
            responseData = returnResponse(
                "SUCCESS",
                response.noRecords,
                200
            );
        }
    } catch(err) {
        logger.error(`${err.status || 500} - ${res.statusMessage} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
        responseData = returnResponse(
            "ERROR",
            response.noRecords,
            404
        );
    }
    logger.info(`END:: Display All Buddies Services. ${req.originalUrl} - ${req.method} - ${req.ip}`);
    return responseData;
}

   

module.exports = {
    displayAllBuddies
}