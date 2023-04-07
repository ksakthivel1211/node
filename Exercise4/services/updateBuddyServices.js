const {readJSONData,writeJSONData,returnResponse} = require("../utils/helper");
const response = require('../response');
// Update function
async function updateService(id,body) {
    let responseObject;
    const buddiesData = await readJSONData('./cdw_ace23_buddies.json');

    let flag = false;
    const editedData = buddiesData.map((buddy) => {
        if(buddy.employeeId === id) {
            flag = true;
            return body;
        }
        return buddy;
    });
    if(flag) {
        try{
            await writeJSONData("./cdw_ace23_buddies.json",editedData);
            responseObject = returnResponse("Success",response.updateSuccess,200);
        }
        catch(err)
        {
            responseObject = returnResponse("Error",response.updateError,403);
        }
    }
    else {
        responseObject = returnResponse("Error",response.noRecords,404);
    }
    return responseObject;
}

module.exports = {updateService};