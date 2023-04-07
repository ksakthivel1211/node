const {deleteService} = require('../services/deleteBuddyServices');

// Directing to services
const deleteBuddy = async (req, res) => {

    const body = req.body;
    const addResponse = await deleteService(body);
    res.send(addResponse);
};

module.exports = {deleteBuddy};