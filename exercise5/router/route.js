const express = require('express');
const router = express.Router();
const {buddyBodyValidation,buddyIdValidation} = require('../middleware/auth');
const {addBuddy,listAllBuddies,listBuddy,deleteBuddyDetails,updateBuddy} = require('../controllers/buddyController');

// Directing to controller
router.post("/",buddyBodyValidation ,addBuddy);
router.delete("/deleteBuddy",buddyIdValidation ,deleteBuddyDetails);
router.get("/", listAllBuddies);
router.get("/getBuddy",buddyIdValidation ,listBuddy);
router.put("/updateId",buddyBodyValidation ,updateBuddy);

module.exports = router;