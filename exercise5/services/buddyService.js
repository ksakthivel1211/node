const {readJSONData, writeJSONData} = require('../utils/helper');
const{returnResponse} = require('../constant/responseConstant');
const response = require('../response');
const logger = require('../utils/logger');

// Start :: Services

// Add details service
const addBuddyDetails = async (req, res) => {
    logger.info(`START:: Add Buddy service`);

        const buddiesData = await readJSONData("./cdw_ace23_buddies.json");
        buddiesData.push(req.body);
        await writeJSONData("./cdw_ace23_buddies.json",buddiesData);
  
    logger.info(`END :: Add Buddy service`);
};

// Delete detail service
const deleteBuddyService = async (req, res) => {
    logger.info(`START:: Delete Buddy service`);

        const buddiesData = await readJSONData('./cdw_ace23_buddies.json');
        const newArray = buddiesData.filter(value => value.employeeId != req.query.employeeId);
        await writeJSONData('./cdw_ace23_buddies.json',newArray);

    logger.info(`END:: Delete Buddy service`);
}

// List All detail Service
const listAllBuddiesService = async (req, res) => {
    logger.info(`START:: listing All Buddies service`);
    const buddiesData = await readJSONData('./cdw_ace23_buddies.json');
    logger.info(`END:: listing All Buddies service`);
    return buddiesData;
}

// List specific detail service
const listBuddyService = async (req, res) => {
    logger.info(`START:: List Buddy Service`);
    
        const buddiesData = await readJSONData('./cdw_ace23_buddies.json');
        const id = req.query.employeeId;
        const buddyData = buddiesData.find(buddy => {
            return buddy.employeeId == id;
        });

    logger.info(`END:: List Buddy service`);
  
    return buddyData;
}

// Update detail service
const updateBuddyService = async (req, res) => {
    logger.info(`START:: Edit Buddy Services`);

        const buddiesData = await readJSONData('./cdw_ace23_buddies.json');
        
        const body = req.body;
        const editedData = buddiesData.map((buddy) => {
            if(buddy.employeeId === req.query.employeeId) {
                return body;
            }
            return buddy
        });
            await writeJSONData('./cdw_ace23_buddies.json', editedData);


    logger.info(`END :: Edit Buddy Services`);
}

// End :: Services
module.exports = {addBuddyDetails,listAllBuddiesService,listBuddyService,deleteBuddyService,updateBuddyService};