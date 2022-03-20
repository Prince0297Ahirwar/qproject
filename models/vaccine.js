const mongoose = require('mongoose');

const vaccineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    uniqueId: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    timeAfterBirth: {
        type: String,
        required: true
    },
    
}, {
    timestamps: true
});

const Vaccine = mongoose.model('Vaccine', vaccineSchema);

module.exports = Vaccine;