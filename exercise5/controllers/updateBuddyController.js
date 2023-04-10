let fs = require('fs');
const logger = require('../logger');
const {updateBuddyinfo} = require('../services/updateService')

const updateBuddy = async (req,res) => {
    const responseData = await updateBuddyinfo(req, res);
    
    res.status(responseData.code).send(responseData.message);
}

module.exports = updateBuddy;