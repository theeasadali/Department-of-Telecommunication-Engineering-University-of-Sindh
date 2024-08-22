const mongoose = require('mongoose');

const subjectSchema = mongoose.Schema(
    {
        courseTitle: {
            type: String,
            required: true
        },
        courseCode: {
            type: String,
            required: true
        },
        creditHours: {
            type: Number,
            required: true
        },
        prerequisite: {
            type: String,
            required: true
        },
        batch: {
            type: String,
            required: true
        },
        part: {
            type: String,
            required: true
        },
        semester: {
            type: String,
            required: true
        },
        courseObjectives: {
            type: String,
            required: true
        },
        courseOutline: {
            type: String,
            required: true
        },
        books: {
            type: Object,
            required: true
        }
    }, {
        timestamps: true
    }
)

const Subject = mongoose.model('Subject', subjectSchema);
module.exports = Subject