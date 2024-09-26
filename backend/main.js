const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const cookieParser = require('cookie-parser');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
    dbName: process.env.DB_NAME,
})

const db = mongoose.connection;

db.on('error', (error) => console.error(error));

db.once('open', () => console.log('Connected to Database'));

const app = express();

app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.use('/api/account', require('./routes/account.js'));

app.listen(process.env.PORT, () => {
    console.log('Server started');
});