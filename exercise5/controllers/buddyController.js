const logger = require('../utils/logger');
const {addBuddyDetails,listAllBuddiesService,listBuddyService,deleteBuddyService,updateBuddyService} = require('../services/buddyService');
const response = require('../response');

// Start :: Controller

// Directing to Service

// Add detail service
const addBuddy = async (req, res) => {

    logger.info(`START :: Add Buddy controller`);
    const responseData = await addBuddyDetails(req, res);
    logger.info(`${responseData.status}`);
    res.send(responseData.message);
    logger.info(`END :: Add Buddy controller`);

};

// Delete detail service
const deleteBuddyDetails = async (req, res) => {
    logger.info(`START :: Delete Buddy controller`);
    const responseData = await deleteBuddyService(req, res);
    logger.info(`${responseData.status}`);
    res.status(responseData.code).send(responseData.message);
    logger.info(`END :: Delete Buddy controller`);
}

// Listing all detail service
const listAllBuddies = async (req, res) => {

    logger.info(`START :: List all Buddy controller`);
    const responseData = await listAllBuddiesService(req, res);
    logger.info(`${responseData.status}`);
    res.status(responseData.code).send(responseData.message);
    logger.info(`END :: List all Buddy controller`);
}

// Listing specific detail service
const listBuddy = async(req,res) => {
    logger.info(`START :: List Buddy controller`);              
    const responseData = await listBuddyService(req, res);
    logger.info(`${responseData.status}`);
    res.status(responseData.code).send(responseData.message);
    logger.info(`END :: List Buddy controller`);
}

// Update detail service
const updateBuddy = async (req,res) => {

    logger.info(`START :: Update Buddy controller`);
    const responseData = await updateBuddyService(req, res);
    logger.info(`${responseData.status}`);
    res.status(responseData.code).send(responseData.message);
    logger.info(`END :: update Buddy controller`);

}

// End :: Controller

module.exports = {addBuddy,listAllBuddies,listBuddy,deleteBuddyDetails,updateBuddy};
