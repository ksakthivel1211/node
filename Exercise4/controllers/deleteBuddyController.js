const { deleteService } = require("../services/deleteBuddyServices");
const response = require("../response");
// Directing to services
const deleteBuddy = async (req, res) => {
    const body = req.params.employeeId;
  if (body) {
    const response = await deleteService(body);
    res.status(response.code).send(response.message);
  } else {
    res.status(204).send(response.noRecords);
  }
};

module.exports = { deleteBuddy };
