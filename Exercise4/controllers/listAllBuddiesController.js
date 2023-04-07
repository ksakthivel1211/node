const { listAllService } = require("../services/listBuddyServices");
const response = require("../response");
// Directing to services
const listAllBuddies = async (req, res) => {
  const body = req.body;
  if(req.body !== undefined && req.body !== null)
  {
    const addResponse = await listAllService();
    res.status(addResponse.code).send(addResponse.message);
  }
  else {
    res.status(204).send(response.noRecords);
  }
};

module.exports = {
  listAllBuddies,
};
