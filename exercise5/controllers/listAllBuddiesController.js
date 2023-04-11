const logger = require('../logger');
const {listAllBuddiesService} = require('../services/listAllService');

const listAllBuddies = async (req, res) => {

    logger.info(`START :: List all Buddy controller`);
    if(req.body !== undefined && req.body !== null)
    {
    const responseData = await listAllBuddiesService(req, res);
    logger.info(`${responseData.status}`);
    res.status(responseData.code).send(responseData.message);
}
else {
  res.status(204).send(response.noRecords);
}
    logger.info(`END :: List all Buddy controller`);
}


module.exports = listAllBuddies;