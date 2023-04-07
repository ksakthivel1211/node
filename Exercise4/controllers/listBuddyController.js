const {listService} = require('../services/listBuddyServies');

// Directing to services
const listBuddy = async (req, res) => {
    const requestId = req.body.employeeId;
    const addResponse = await listService(requestId);
    res.send(addResponse);
}

module.exports = {
    listBuddy
}