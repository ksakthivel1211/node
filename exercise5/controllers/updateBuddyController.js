let fs = require('fs');
const logger = require('../logger');
const updateBuddyinfo = require('../services/updateService')

const updateBuddy = async (req,res) => {
    const responseData = await addBuddyDetails(req, res);
    
    res.status(responseData.code).send(responseData.message);
}

module.exports = updateBuddy;