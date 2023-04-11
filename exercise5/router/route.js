const express = require('express');
const router = express.Router();
let fs = require('fs');

const buddyAdd = require('../controllers/addBuddyController');
const deleteBuddy = require('../controllers/deleteBuddyController');
const listAllBuddies = require('../controllers/listAllBuddiesController');
const listBuddy = require('../controllers/listBuddyController');
const updateBuddy = require('../controllers/updateBuddyController');

router.post("/", buddyAdd);

router.delete("/:id", deleteBuddy);

router.get("/", listAllBuddies);

router.get("/:id", listBuddy);

router.put("/:id",updateBuddy);

module.exports = router;