const {updateService} = require('../services/updateBuddyServices');
const response = require('../response');
// Directing to services
const updateBuddy = async (req, res) => {

    const id = req.params.employeeId;
    const body = req.body;
    if(body){
    const addResponse = await updateService(id,body);
    res.status(addResponse.code).send(addResponse.message);
    }
    else
    {
        res.status(204).send(response.noRecords);
    }
}

module.exports = {
    updateBuddy
}