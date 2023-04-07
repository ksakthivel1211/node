const {addService} = require('../services/addBuddyServices');
const response = require('../response');
// Directing to services
const addBuddy = async (req, res) => {
    const body = req.body;
    if(body)
    {
        const addResponse = await addService(body);
        res.status(addResponse.code).send(addResponse.message);
    }
    else{
        res.status(204).send(response.noRecords);
    }

};

module.exports = {addBuddy};