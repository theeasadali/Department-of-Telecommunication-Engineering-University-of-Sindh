const mongoose = require('mongoose');

const cardSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        }
    }, {
        timestamps: true
    }
)

const Card = mongoose.model('Card', cardSchema);
module.exports = Card