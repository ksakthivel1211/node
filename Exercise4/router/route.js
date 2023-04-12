const express = require('express');
const router = express.Router();
let fs = require('fs');
const auth = require('../middleware/auth');

// Mapping controller to variable
const {addBuddy,deleteBuddy,listAllBuddies,listBuddy,updateBuddy} = require('../controllers/buddyController');

// Directing to controller
router.post("/", auth.buddyBodyValidation,addBuddy);
router.delete("/:employeeId",auth.buddyIdValidation, deleteBuddy);
router.get("/", listAllBuddies);
router.get("/:employeeId",auth.buddyIdValidation , listBuddy);

router.put("/:employeeId",updateBuddy);

module.exports = router;