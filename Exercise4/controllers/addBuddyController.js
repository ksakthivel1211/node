const {addService} = require('../services/addBuddyServices');

// Directing to services
const addBuddy = async (req, res) => {
    const body = req.body;
    const addResponse = await addService(body);
    res.send(addResponse);
};

module.exports = {addBuddy};