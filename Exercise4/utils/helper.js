const fs = require('fs').promises;

// Read Function
const readJSONData = async (url) => {
    return await JSON.parse(await fs.readFile(url,"utf-8"));
}

// Write function
const writeJSONData = async (url, buddiesData) => {
    return await fs.writeFile(url,JSON.stringify(buddiesData));
}

const returnResponse = (status, message, code) => {
    const responseObject = {
        status, message, code
    }
    return responseObject;
}


module.exports = {
    readJSONData, writeJSONData,returnResponse
}

