const {readJSONData,writeJSONData} = require('../utils/helper');

// Update function
async function updateService(body) {

    const buddiesData = await readJSONData('./cdw_ace23_buddies.json');

    let flag = false;
    const editedData = buddiesData.map((buddy) => {
        if(buddy.employeeId === body.employeeId) {
            flag = true;
            return body;
        }
        return buddy;
    });
    if(flag) {
        try{
            await writeJSONData("./cdw_ace23_buddies.json",editedData);
            return "Buddy updated successfully";
        }
        catch(err)
        {
            return "Unable updated buddy";
        }
    }
    else {
        return "Employee Id not found";
    }
}

module.exports = {updateService};