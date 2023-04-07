const {readJSONData} = require("../utils/helper");

// List function
async function listService(id) {

    const buddiesData = await readJSONData('./cdw_ace23_buddies.json');
    const responseData = buddiesData.filter(buddy => {
        return buddy.employeeId === id || buddy.realName === id;
    }); 
    let value = responseData.length > 0 ? (responseData) : ("Employee Id or Name not found");
    return value;
}

module.exports = {listService};