const returnResponse = (status, message, code) => {
    const responseObject = {
        status, message, code
    }
    return responseObject;
}

module.exports = {returnResponse};