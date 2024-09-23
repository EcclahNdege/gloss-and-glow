const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 2,
        max: 255
    },
    lastName: String,

    username: {
        type: String,
        required: true,
        min: 2,
        max: 255
    },
    email : String,
    phone : String,
    password : String,
    services: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service'
    }],
    numberOfServices: Number,
    appointments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment'
    }],
});

userSchema.pre('save', function(next) {
    this.numberOfServices = this.services.length;
    next();
});

module.exports = mongoose.model('User', userSchema);