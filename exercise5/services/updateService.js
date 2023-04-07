const logger = require("../logger");
const {readJSONData, writeJSONData, returnResponse} = require('../utils/helper');
const response = require('../response');

const updateBuddyinfo = async (req, res) => {
    logger.info(`START:: Edit Buddy Details Services. ${req.originalUrl} - ${req.method} - ${req.ip}`);
    let responseData;
    try {
        const buddiesData = await readJSONData('./cdw_ace23_buddies.json');
        
        const body = req.body;
        let flag = false;
        const editedData = buddiesData.map((buddy) => {
            if(buddy.employeeId === body.employeeId) {
                flag = true;
                return body;
            }
            return buddy;
        });
        
        if(flag) {
            await writeJSONData('./cdw_ace23_buddies.json', editedData);
            responseData = returnResponse(
                "SUCCESS",
                response.updateSuccess,
                200
            );
        }
        else {
            responseData = returnResponse(
                "ERROR",
                response.invalidInput,
                403
            );
        }
    } catch(err) {
        logger.error(`${err.status || 500} - ${res.statusMessage} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
        responseData = returnResponse(
            "ERROR",
            response.serverError,
            500
        );
    }
    return responseData;
}

module.exports = {
    updateBuddyinfo
}