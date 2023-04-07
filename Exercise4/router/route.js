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
router.post("/deleteBuddy", deleteBuddy);
router.post("/listAllBuddies", listAllBuddies);
router.post("/listBuddy", listBuddy);
router.post("/updateBuddy",updateBuddy);

module.exports = router;