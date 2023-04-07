const {readJSONData,returnResponse} = require("../utils/helper");
const response = require('../response');
// List function
async function listService(id) {

    let responseObject;
    try{
    const buddiesData = await readJSONData('./cdw_ace23_buddies.json');
    const responseData = buddiesData.find(buddy => {
        return buddy.employeeId === id || buddy.realName === id;
    });
    if(responseData){
        responseObject = returnResponse(response.Success,responseData,200);
    }
    else{
        responseObject = returnResponse(response.Error,response.noRecords,404);
    }
}
catch(err){
    responseObject = returnResponse(response.Error,response.serverError,500);
}
    return responseObject;
}

async function listAllService() {
    let responseObject;
    try{
    const buddiesData = await readJSONData('./cdw_ace23_buddies.json');
    if(buddiesData)
    {
        responseObject = returnResponse(response.Success,buddiesData,200);
    }
    else{
        responseObject = returnResponse(response.Error,response.noRecords,404);
    }
}
    catch(err){
        responseObject = returnResponse(response.Error,response.serverError,500);
    }
    return responseObject;
}

module.exports = {listService,listAllService};