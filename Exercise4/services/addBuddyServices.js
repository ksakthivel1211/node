const {readJSONData,writeJSONData,returnResponse} = require("../utils/helper");
const response = require('../response');
// Add function
async function addService(body) {
    let responseObject;
    const buddiesData = await readJSONData("./cdw_ace23_buddies.json");

    let flag = buddiesData.some((buddy) => {
        return buddy.employeeId === body.employeeId;
    });
    
    if (flag) {
        responseObject = returnResponse(response.Error,response.alreadyExists,403);
    } 
    else {
        buddiesData.push(body);
        try{
            await writeJSONData("./cdw_ace23_buddies.json",buddiesData);
            responseObject = returnResponse(response.Success,response.writeSuccess,200);
        }
        catch(err)
        {
            responseObject = returnResponse(response.Error,response.serverError,500);
        }
    }
    return responseObject;
}

module.exports = {addService};