const mongoose = require('mongoose');

const gallerySchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        }
    }, {
        timestamps: true
    }
)

const Gallery = mongoose.model('Gallery', gallerySchema);
module.exports = Gallery