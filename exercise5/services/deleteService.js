const logger = require('../logger');
const {readJSONData, writeJSONData, returnResponse} = require('../utils/helper');
const response = require('../response');

const deleteBuddyService = async (req, res) => {
    logger.info(`START:: Delete Buddy service`);
    let responseData;
    try {
        const buddiesData = await readJSONData('./cdw_ace23_buddies.json');
    
        const newArray = buddiesData.filter(value => value.employeeId !== req.params.id);
        console.log(newArray);

        if(buddiesData.length == newArray.length) {
            responseData = returnResponse(
                "ERROR",
                response.invalidInput,
                403
            );
        }
        else {
            await writeJSONData('./cdw_ace23_buddies.json',newArray);
            responseData = returnResponse(
                "SUCCESS",
                response.deleteSuccess,
                200
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
    logger.info(`END:: Delete Buddy service`);
    return responseData;
}

module.exports = {
    deleteBuddyService
}