const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection;

db.on('error', (error) => console.error(error));

db.once('open', () => console.log('Connected to Database'));

const app = express();

app.use(cors({
    origin: "*", // allow all origins
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}));

app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log('Server started');
});