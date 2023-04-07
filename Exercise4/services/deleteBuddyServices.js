const {readJSONData,writeJSONData} = require("../utils/helper");

// Delete function
async function deleteService(body) {

    const buddiesData = await readJSONData('./cdw_ace23_buddies.json');

    const finalData = buddiesData.filter(value => value.employeeId !== body.employeeId);

    if(buddiesData.length == finalData.length) {
        return "Employee Id not found";
    }
    else {
        try{
            await writeJSONData("./cdw_ace23_buddies.json",finalData);
            return "Deleted successfully";
        }
        catch(err)
        {
            return "Unable to add delete";
        }
    }
}

module.exports = {deleteService};