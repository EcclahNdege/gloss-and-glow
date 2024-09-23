const mongoose = require('mongoose');
const service = require('./service');

const appointmentSchema = new mongoose.Schema({
    service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['pending', 'confirmed', 'cancelled' , 'completed']
    },
});

module.exports = mongoose.model('Appointment', appointmentSchema);