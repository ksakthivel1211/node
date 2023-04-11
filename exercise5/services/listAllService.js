const {readJSONData, returnResponse} = require('../utils/helper');
const response = require('../response');
const logger = require('../logger');

const listAllBuddiesService = async (req, res) => {
    logger.info(`START:: listing All Buddies service`);
    let responseData;
    try {
        const buddiesData = await readJSONData('./cdw_ace23_buddies.json');
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
    logger.info(`END:: listing All Buddies service`);
    return responseData;
}

const listBuddies = async (req, res) => {
    logger.info(`START:: List Buddy Service`);
    let responseData;
    try {
        const buddiesData = await readJSONData('./cdw_ace23_buddies.json');
        const id = req.params.id;
        const buddyData = buddiesData.find(buddy => {
            return buddy.employeeId === id;
        });
        if(buddyData) {
            responseData = returnResponse(
                "SUCCESS",
                buddyData,
                200
            );
            console.log(responseData);
        }
        else {
            responseData = returnResponse(
                "ERROR",
                response.noRecords,
                404
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
    logger.info(`END:: List Buddy service`);
    return responseData;
}
   

module.exports = {
    listAllBuddiesService,listBuddies
}