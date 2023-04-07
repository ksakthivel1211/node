const {updateService} = require('../services/updateBuddyServices');

// Directing to services
const updateBuddy = async (req, res) => {

    const body = req.body;
    const addResponse = await updateService(body);
    res.send(addResponse);
}

module.exports = {
    updateBuddy
}