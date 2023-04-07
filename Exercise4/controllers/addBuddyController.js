const {addService} = require('../services/addBuddyServices');
const response = require('../response');
// Directing to services
const addBuddy = async (req, res) => {
    const body = req.body;
    if(req.body.employeeID !== undefined && req.body.employeeID !== null && Number.isInteger(eq.body.employeeID)  &&  req.body.realName !== undefined && req.body.realName !== null &&
        req.body.nickName !== undefined && req.body.nickName !== null && (req.body.dob instanceof Date) && req.body.dob !== null &&
        req.body.hobbies !== undefined && req.body.hobbies !== null)
    {
        const addResponse = await addService(body);
        res.status(addResponse.code).send(addResponse.message);
    }
    else{
        res.status(204).send(response.noRecords);
    }

};

module.exports = {addBuddy};