const express = require('express');
const router = express.Router();
let fs = require('fs');

// Mapping controller to variable
const {addBuddy} = require('../controllers/addBuddyController');
const {deleteBuddy} = require('../controllers/deleteBuddyController');
const {listAllBuddies} = require('../controllers/listAllBuddiesController');
const {listBuddy} = require('../controllers/listBuddyController');
const {updateBuddy} = require('../controllers/updateBuddyController');

// Directing to controller
router.post("/addBuddy", addBuddy);
router.delete("/deleteBuddy/:employeeId", deleteBuddy);
router.get("/listAllBuddies", listAllBuddies);
router.get("/listBuddy/:employeeId", listBuddy);
router.put("/updateBuddy/:employeeId",updateBuddy);

module.exports = router;