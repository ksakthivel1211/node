
const logger = require('../logger');
const {addBuddyDetails} = require('../services/addService');

const addBuddy = async (req, res) => {
    const responseData = await addBuddyDetails(req, res);
    
    res.status(responseData.code).send(responseData.message);
};

module.exports = addBuddy;
