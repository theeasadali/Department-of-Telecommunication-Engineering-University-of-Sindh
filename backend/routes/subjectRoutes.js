const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const Subject = require('../models/subjectModel');

//  @desc   Fetch Gallery
//  @route  Get /api/gallery
//  @access Public 
router.get('/', asyncHandler(async(req, res) => {
    const subject = await Subject.find({})
    res.json(subject);
}))

module.exports = router;