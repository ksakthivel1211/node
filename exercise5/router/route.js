const express = require('express');
const router = express.Router();
let fs = require('fs');

const buddyAdd = require('../controllers/addBuddyController');
const deleteBuddy = require('../controllers/deleteBuddyController');
const listAllBuddy = require('../controllers/listAllBuddiesController');
const listBuddy = require('../controllers/listBuddyController');
const updateBuddy = require('../controllers/updateBuddyController');

router.post("/addBuddy", buddyAdd);

router.post("/deleteBuddy", deleteBuddy);

router.post("/listAllBuddy", listAllBuddy);

router.post("/listBuddy", listBuddy);

router.post("/updateBuddy",updateBuddy);

module.exports = router;