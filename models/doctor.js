const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
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
    password: {
        type: String,
        required: true
    },
    repassword: {
        type: String,
        required: true
    },
    hospital: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "doctor"
    } 
}, {
    timestamps: true
});


const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;