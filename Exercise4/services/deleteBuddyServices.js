const {readJSONData,writeJSONData,returnResponse} = require("../utils/helper");
const response = require('../response');
// Delete function
async function deleteService(body) {

    let responseObject;
    const buddiesData = await readJSONData('./cdw_ace23_buddies.json');

    const finalData = buddiesData.filter(value => value.employeeId !== body);

    if(buddiesData.length == finalData.length) {
        responseObject = returnResponse(response.Error,response.noRecords,404);
    }
    else {
        try{
            await writeJSONData("./cdw_ace23_buddies.json",finalData);
            responseObject = returnResponse(response.Success,response.deleteSuccess,200);
        }
        catch(err)
        {
            responseObject = returnResponse(response.Error,response.serverError,500);
        }
    }
    return responseObject
}

module.exports = {deleteService};