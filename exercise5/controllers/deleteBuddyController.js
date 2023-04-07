const logger = require('../logger');
const {deleteBuddyService} = require('../services/deleteService');

const deleteBuddyDetails = async (req, res) => {
    
    const responseData = await deleteBuddyService(req, res);

    res.status(responseData.code).send(responseData.message);
}

module.exports = deleteBuddyDetails;