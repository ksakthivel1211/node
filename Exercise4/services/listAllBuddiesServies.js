const {readJSONData,} = require("../utils/helper");

// Listing all function
async function listAllService() {

    const buddiesData = await readJSONData('./cdw_ace23_buddies.json');

    let value = buddiesData.length > 0 ? (buddiesData) : ("No entries to display");
    return value;
}

module.exports = {listAllService};