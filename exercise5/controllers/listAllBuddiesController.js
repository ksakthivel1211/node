const logger = require('../logger');
const listService = require('../services/listAllService');

const listAllBuddies = async (req, res) => {
    
    const responseData = await listService.displayAllBuddies(req, res);
    
    res.status(responseData.code).send(responseData.message);
}


module.exports = listAllBuddies;