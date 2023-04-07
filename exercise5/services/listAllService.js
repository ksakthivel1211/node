const {readJSONData, returnResponse} = require('../utils/helper');
const constants = require('../utils/constants.json');
const {fileLogger} = require('../logger');

const displayAllBuddies = async (req, res) => {
    fileLogger.info(`START:: Display All Buddies Services. ${req.originalUrl} - ${req.method} - ${req.ip}`);
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
                constants.NO_ENTRIES,
                200
            );
        }
    } catch(err) {
        fileLogger.error(`${err.status || 500} - ${res.statusMessage} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
        responseData = returnResponse(
            "ERROR",
            constants.FILE_NOT_FOUND,
            404
        );
    }
    fileLogger.info(`END:: Display All Buddies Services. ${req.originalUrl} - ${req.method} - ${req.ip}`);
    return responseData;
}

   

module.exports = {
    displayAllBuddies
}