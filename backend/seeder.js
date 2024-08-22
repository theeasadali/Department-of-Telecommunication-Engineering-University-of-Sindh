const mongoose = require('mongoose');
const singleEvent = require('./data/singleEvent');
const galleryData = require('./data/galleryData');
const subjectsData = require('./data/subjectsData');
const Card = require('./models/cardModel');
const connectDB = require("./config/db");
const Gallery = require('./models/galleryModel');
const Subject = require('./models/subjectModel');

connectDB()

const importData = async () => {
    try {
        await Card.deleteMany()
        await Gallery.deleteMany()
        await Subject.deleteMany()
        const createdEvents = await Card.insertMany(singleEvent);
        const createdGallery = await Gallery.insertMany(galleryData);
        const createdSubject = await Subject.insertMany(subjectsData);
        console.log('Data Imported!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await Card.deleteMany();
        await Gallery.deleteMany();
        await Subject.deleteMany();
        console.log('Data Destroyed!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1)
    }
}

if(process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}