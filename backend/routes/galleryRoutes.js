const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const Gallery = require('../models/galleryModel');

//  @desc   Fetch Gallery
//  @route  Get /api/gallery
//  @access Public 
router.get('/', asyncHandler(async(req, res) => {
    const gallery = await Gallery.find({})
    res.json(gallery);
}))

module.exports = router;