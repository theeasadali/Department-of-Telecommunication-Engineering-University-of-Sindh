const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const Card = require('../models/cardModel');

//  @desc   Fetch all events
//  @route  Get /api/allEvents
//  @access Public 
router.get('/', asyncHandler(async(req, res) => {
    const events = await Card.find({})
    res.json(events);
}))

module.exports = router;