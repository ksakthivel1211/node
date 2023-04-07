const { listService } = require("../services/listBuddyServices");
const response = require("../response");
// Directing to services
const listBuddy = async (req, res) => {
    
    const requestId = req.params.employeeId;
    const addResponse = await listService(requestId);
    res.status(addResponse.code).send(addResponse.message);

};

module.exports = {
  listBuddy,
};
