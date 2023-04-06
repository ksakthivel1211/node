const logger = require('../logger');
const {readJSONData, writeJSONData, returnResponse} = require('../utils/helper');
const constants = require('../response');

const addBuddyDetails = async (req, res) => {
    let responseData;
    try {
        const buddiesData = await readJSONData("./cdw_ace23_buddies.json");
        const body = req.body;

        let flag = buddiesData.some((buddy) => {
            return buddy.employeeId === body.employeeId;
        });
        
        if (flag) {
            responseData = returnResponse(
                "ERROR",
                constants.alreadyExists,
                403
            );
            logger.warn(`Id exists already. ${req.originalUrl} - ${req.method} - ${req.ip}`)
            
        } else {
            buddiesData.push(body);
            await writeJSONData("./cdw_ace23_buddies.json",buddiesData);
            responseData = returnResponse(
                "SUCCESS",
                constants.writeSuccess,
                200
            );
        }
    } catch(err) {
        logger.error(`${err.status || 500} - ${res.statusMessage} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
        responseData = returnResponse(
            "ERROR",
            constants.serverError,
            500
        );
    }
    return responseData;
};

module.exports = {addBuddyDetails};