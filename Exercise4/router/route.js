const express = require('express');
const router = express.Router();
let fs = require('fs');

// Mapping controller to variable
const {addBuddy,deleteBuddy,listAllBuddies,listBuddy,updateBuddy} = require('../controllers/buddyController');

// Directing to controller
router.post("/", addBuddy);
router.delete("/:employeeId", deleteBuddy);
router.get("/", listAllBuddies);
router.get("/:employeeId", listBuddy);
router.put("/:employeeId",updateBuddy);

module.exports = router;