const {addService,deleteService,listAllService,listService,updateService} = require('../services/buddyServices');
const response = require('../response');

// Directing to services
const addBuddy = async (req, res) => {
    const bodyy = req.body;
  console.log(req.body.employeeId);
  console.log(req.body.nickName);
  console.log(req.body.realName);
  console.log(req.body.hobbies);
  console.log(req.body.dob);

    if( req.body.employeeId  &&  req.body.realName !== undefined  && req.body.realName !== null &&
        req.body.nickName !== undefined  &&  req.body.nickName !== null  && (req.body.dob instanceof Date)  && req.body.hobbies !== undefined && req.body.hobbies !== null)
        {
        console.log("hi");
        const addResponse = await addService(bodyy);
        res.status(addResponse.code).send(addResponse.message);
    }
    else{
        console.log("hipoo00ooooo");
        console.log(response.noRecords);
        res.send(response.noRecords);
    }

};

const updateBuddy = async (req, res) => {

    const id = req.params.employeeId;
    const body = req.body;
    if(body){
    const addResponse = await updateService(id,body);
    res.status(addResponse.code).send(addResponse.message);
    }
    else
    {
        res.send(response.noRecords);
    }
};

const deleteBuddy = async (req, res) => {
    const body = req.params.employeeId;

  if (req.body !== undefined && req.body !== null && Number.isInteger(eq.body)) 
  {
    const response = await deleteService(body);
    res.status(response.code).send(response.message);
  } 
  else {
    res.send(response.noRecords);
  }
};

const listAllBuddies = async (req, res) => {
    const body = req.body;
    if(req.body !== undefined && req.body !== null)
    {
      const addResponse = await listAllService();
      res.status(addResponse.code).send(addResponse.message);
    }
    else {
      res.send(response.noRecords);
    }
  };

  const listBuddy = async (req, res) => {

    const requestId = req.params.employeeId;
    const addResponse = await listService(requestId);
    res.send(addResponse.message);

};

module.exports = {addBuddy,updateBuddy,listAllBuddies,listBuddy,deleteBuddy};