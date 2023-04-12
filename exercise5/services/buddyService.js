const {readJSONData, writeJSONData} = require('../utils/helper');
const{returnResponse} = require('../constant/responseConstant');
const response = require('../response');
const logger = require('../utils/logger');

// Start :: Services

// Add details service
const addBuddyDetails = async (req, res) => {
    logger.info(`START:: Add Buddy service`);
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
                response.alreadyExists,
                403
            );
            logger.warn(`Id exists already. ${req.originalUrl} - ${req.method} - ${req.ip}`)
            
        } else {
            buddiesData.push(body);
            await writeJSONData("./cdw_ace23_buddies.json",buddiesData);
            responseData = returnResponse(
                "SUCCESS",
                response.writeSuccess,
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
    logger.info(`END :: Add Buddy service`);
    return responseData;
};

// Delete detail service
const deleteBuddyService = async (req, res) => {
    logger.info(`START:: Delete Buddy service`);
    let responseData;
    try {
        const buddiesData = await readJSONData('./cdw_ace23_buddies.json');
    
        const newArray = buddiesData.filter(value => value.employeeId !== req.query.employeeId);
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

// List All detail Service
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

// List specific detail service
const listBuddyService = async (req, res) => {
    logger.info(`START:: List Buddy Service`);
    let responseData;
    try {
        const buddiesData = await readJSONData('./cdw_ace23_buddies.json');
        const id = req.query.employeeId;
        const buddyData = buddiesData.find(buddy => {
            return buddy.employeeId == id;
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

// Update detail service
const updateBuddyService = async (req, res) => {
    logger.info(`START:: Edit Buddy Services`);
    let responseData;
    try {
        const buddiesData = await readJSONData('./cdw_ace23_buddies.json');
        
        const body = req.body;
        let flag = false;
        const editedData = buddiesData.map((buddy) => {
            if(buddy.employeeId === req.query.employeeId) {
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
    logger.info(`END :: Edit Buddy Services`);
    return responseData;
}

// End :: Services
module.exports = {addBuddyDetails,listAllBuddiesService,listBuddyService,deleteBuddyService,updateBuddyService};