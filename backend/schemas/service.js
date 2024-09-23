const mongoose = require('mongoose');
const user = require('./user');

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 2,
        max: 255
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    description: String,
    price: Number,
    duration: Number,
    categories: [String],
    image: String,
    rating: Number,
    numberOfReviews: Number,
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }],
    appointments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment'
    }],
    NumberOfAppointments: Number,
});

serviceSchema.pre('save', function(next) {
    this.numberOfReviews = this.reviews.length;
    this.NumberOfAppointments = this.appointments.length;

    // Calculate the average rating
    let sum = 0;
    this.reviews.forEach(review => {
        sum += review.rating;
    });
    this.rating = sum / this.numberOfReviews;
    next();
});

module.exports = mongoose.model('Service', serviceSchema);