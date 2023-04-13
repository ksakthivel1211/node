const {returnResponse} = require('../constant/responseConstant');
const {addBuddyDetails,listAllBuddiesService,listBuddyService,deleteBuddyService,updateBuddyService} = require('../services/buddyService');
const response = require('../response');
const logger = require('../utils/logger');

// Start :: Controller

// Directing to Service

// Add detail service
const addBuddy = async (req, res) => {
    let responseData;
    logger.info(`START :: Add Buddy controller`);
    try{
    await addBuddyDetails(req, res);
    responseData = returnResponse(
        "SUCCESS",
        response.writeSuccess,
        200
    );
    }
    catch(err)
    {
        logger.error(`${err.status || 500} - ${res.statusMessage} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
        responseData = returnResponse(
            "ERROR",
            response.serverError,
            500
        );
    }
    logger.info(`${responseData.status}`);
    res.send(responseData);
    logger.info(`END :: Add Buddy controller`);

};

// Delete detail service
const deleteBuddyDetails = async (req, res) => {
    let responseData;
    logger.info(`START :: Delete Buddy controller`);
    try{
    responseData = await deleteBuddyService(req, res);
    responseData = returnResponse(
        "SUCCESS",
        response.deleteSuccess,
        200
    );
    }
    catch(err)
    {
        logger.error(`${err.status || 500} - ${res.statusMessage} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
        responseData = returnResponse(
            "ERROR",
            response.serverError,
            500
        );
    }
    logger.info(`${responseData.status}`);
    res.send(responseData);
    logger.info(`END :: Delete Buddy controller`);
}

// Listing all detail service
const listAllBuddies = async (req, res) => {
    let responseData;
    logger.info(`START :: List all Buddy controller`);
    try{
    buddiesData = await listAllBuddiesService(req, res);
    responseData = returnResponse(
        "SUCCESS",
        buddiesData,
        200
    );
    }
    catch(err)
    {
        logger.error(`${err.status || 500} - ${res.statusMessage} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
        responseData = returnResponse(
            "ERROR",
            response.noRecords,
            404
        );
    }
    logger.info(`${responseData.status}`);
    res.status(responseData.code).send(responseData.message);
    logger.info(`END :: List all Buddy controller`);
}

// Listing specific detail service
const listBuddy = async(req,res) => {
    let responseData
    logger.info(`START :: List Buddy controller`);  
    try{            
    buddyData = await listBuddyService(req, res);
    responseData = returnResponse(
        "SUCCESS",
        buddyData,
        200
    );
    }
    catch(err)
    {
        logger.error(`${err.status || 500} - ${res.statusMessage} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
        responseData = returnResponse(
            "ERROR",
            response.noRecords,
            404
        );
    }
    logger.info(`${responseData.status}`);
    res.status(responseData.code).send(responseData.message);
    logger.info(`END :: List Buddy controller`);
}

// Update detail service
const updateBuddy = async (req,res) => {
    let responseData;
    logger.info(`START :: Update Buddy controller`);
    try{
        responseData = await updateBuddyService(req, res);
        responseData = returnResponse(
            "SUCCESS",
            response.updateSuccess,
            200
        );
    }
    catch(err)
    {
        logger.error(`${err.status || 500} - ${res.statusMessage} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
        responseData = returnResponse(
            "ERROR",
            response.serverError,
            500
        );
    }
    logger.info(`${responseData.status}`);
    res.status(responseData.code).send(responseData.message);
    logger.info(`END :: update Buddy controller`);

}

// End :: Controller

module.exports = {addBuddy,listAllBuddies,listBuddy,deleteBuddyDetails,updateBuddy};
