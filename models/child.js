const mongoose = require('mongoose');
const vaccine = require('./vaccine');

const childSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    uniqueId: {
        type: String,
        required: true
    },
    fatherName: {
        type: String,
        required: true
    },
    history: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    nextSchedule: {
        type: Date,
        required: true
    },
    nextVaccine: {
        type: String,
        required: true
    } 
    
}, {
    timestamps: true
});

const Child = mongoose.model('Child', childSchema);

module.exports = Child;