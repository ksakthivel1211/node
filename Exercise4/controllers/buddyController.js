const {addService,deleteService,listAllService,listService,updateService} = require('../services/buddyServices');
const response = require('../response');

// Directing to services

// Add controller
const addBuddy = async (req, res) => {
    try{
      const bodyy = req.body;
      const addResponse = await addService(bodyy);
      res.status(addResponse.code).send(addResponse);
    }
    catch(error){
      res.status(500).send(response.serverError);
    }
};

// Update controller
const updateBuddy = async (req, res) => {
  try{
    const id = req.params.employeeId;
    const body = req.body;
    const addResponse = await updateService(id,body);
    res.status(addResponse.code).send(addResponse);
  }
  catch(error)
  {
    res.send(response.serverError);
  }
};

// Delete Controller
const deleteBuddy = async (req, res) => {
  try{
    const body = req.params.employeeId;
    const response = await deleteService(body);
    res.status(response.code).send(response);
  }
  catch(error)
  {
    res.send(response.serverError);
  }
};

// List All controller
const listAllBuddies = async (req, res) => {
  try{
      const addResponse = await listAllService();
      res.status(addResponse.code).send(addResponse);
    }
    catch(error)
    {
      res.send(response.serverError);
    }
  };

  // List controller
  const listBuddy = async (req, res) => {
    try{
    const requestId = req.params.employeeId;
    const addResponse = await listService(requestId);
    res.send(addResponse);
  }
  catch(error)
  {
    res.send(response.serverError);
  }
};

module.exports = {addBuddy,updateBuddy,listAllBuddies,listBuddy,deleteBuddy};