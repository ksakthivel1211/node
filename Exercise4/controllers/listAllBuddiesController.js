const { listAllService } = require("../services/listAllBuddiesServices");
const response = require("../response");
// Directing to services
const listAllBuddies = async (req, res) => {
  const body = req.body;

    const addResponse = await listAllService();
    res.status(addResponse.code).send(addResponse.message);

};

module.exports = {
  listAllBuddies,
};
