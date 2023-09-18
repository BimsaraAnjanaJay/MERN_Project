const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require('morgan')
const mongoose = require("mongoose");
require('dotenv').config({path:__dirname+'/.env'})
const dbConnect = require('./config/dbConnnect');
const app = express();
const path = require('path')

const admin = require('./routes/adminRoutes')
const student = require('./routes/studentRoutes')
const lecturer = require('./routes/lecturerRoutes')
const authentication = require('./routes/authRoutes');
const course = require('./routes/courseRoutes');
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 5000;
dbConnect;

app.use(cookieParser())
app.use(morgan('dev'))
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: "http://localhost:3000", credentials:true }));

app.use(express.static(path.join(__dirname, '..', 'build')));

app.use('/admin', admin)
app.use('/student', student)
app.use('/lecturer', lecturer)
app.use('/auth', authentication)
app.use('/course', course)

app.listen(PORT, () => {
    console.log(`Listening to port ${ PORT }`);
}); 