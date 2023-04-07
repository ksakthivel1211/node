const {readJSONData,writeJSONData} = require("../utils/helper");

// Add function
async function addService(body) {

    const buddiesData = await readJSONData("./cdw_ace23_buddies.json");

    let flag = buddiesData.some((buddy) => {
        return buddy.employeeId === body.employeeId;
    });
    
    if (flag) {
        return "Employee Id exists already";
    } 
    else {
        buddiesData.push(body);
        try{
            await writeJSONData("./cdw_ace23_buddies.json",buddiesData);
            return "Buddy added successfully";
        }
        catch(err)
        {
            return "Unable to add buddy";
        }
    }
}

module.exports = {addService};