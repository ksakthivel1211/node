
// Body content validation
const buddyBodyValidation = (req,res,next) => {

    const {employeeId,realName,nickName,dob,hobbies} = req.body;

    if(employeeId &&  realName && nickName && dob && hobbies){
            next();
    }
    else{
        res.status(400).send("Not a valid request.")
    }
}

// Buddy Id validation
const buddyIdValidation = (req,res,next) => {

    if(req.params.employeeId){
            next();
    }
    else{
        res.status(400).send("Not a valid request.")
    }
}

module.exports = {buddyBodyValidation,buddyIdValidation};













// File content validation
// const fileContentValidation = (req, res, next)=>
// {
//     try
//     {
//         readJSONData("./cdw_ace23_buddies.json");
//         next();
//     }
//     catch(err){
//         res.status(400).send(err);
//     }
// }
// const {readJSONData} = require('../utils/helper');