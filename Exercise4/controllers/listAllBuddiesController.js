const {listAllService} = require('../services/listAllBuddiesServies');

// Directing to services
const listAllBuddies = async (req, res) => {

    const addResponse = await listAllService();
    res.send(addResponse);
}

module.exports = {
    listAllBuddies
}