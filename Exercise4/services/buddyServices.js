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
            responseObject = returnResponse(response.Success,response.updateSuccess,200);
        }
        catch(err)
        {
            responseObject = returnResponse(response.Error,response.updateError,403);
        }
    }
    else {
        responseObject = returnResponse(response.Error,response.noRecords,404);
    }
    return responseObject;
}

module.exports = {addService,deleteService,listService,listAllService,updateService};