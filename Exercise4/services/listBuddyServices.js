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
        responseObject = returnResponse("Success",responseData,200);
    }
    else{
        responseObject = returnResponse("Error",response.noRecords,404);
    }
}
catch(err){
    responseObject = returnResponse("Error",response.serverError,500);
}
    return responseObject;
}

module.exports = {listService};