const express = require('express');
const connectDB = require("./config/db");
const aboutData = require('./data/aboutData.js');
const eventPage = require('./data/eventPage.js');
const singleEventRoutes = require('./routes/singleEventRoutes');
const galleryRoutes = require('./routes/galleryRoutes')
const subjectRoutes = require('./routes/subjectRoutes');

const app = express();

connectDB()

app.get('/', (req, res) => {
    res.send('Api running on port 5000');
})

app.get('/api/eventPage', (req,res) => {
    res.json(eventPage);
})

app.use('/api/allEvents', singleEventRoutes)
app.use('/api/gallery', galleryRoutes)
app.use('/api/subjects', subjectRoutes)

app.listen(5000, console.log("Server running on PORT 5000"));