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

    if(req.query.employeeId){
            next();
    }
    else{
        res.status(400).send("Not a valid request.")
    }
}

module.exports = {buddyBodyValidation,buddyIdValidation};