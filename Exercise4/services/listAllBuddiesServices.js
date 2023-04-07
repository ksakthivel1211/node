const {readJSONData,returnResponse} = require("../utils/helper");
const response = require('../response');
// Listing all function
async function listAllService() {
    let responseObject;
    try{
    const buddiesData = await readJSONData('./cdw_ace23_buddies.json');
    if(buddiesData)
    {
        responseObject = returnResponse("Success",buddiesData,200);
    }
    else{
        responseObject = returnResponse("Success",response.noRecords,404);
    }
}
    catch(err){
        responseObject = returnResponse("Error",response.serverError,500);
    }
    return responseObject;
}

module.exports = {listAllService};