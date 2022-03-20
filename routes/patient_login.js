const express = require('express');

const router = express.Router();
const patientController = require('../controllers/patient_login_controller');

router.get('/patient_login', patientController.patient_login);
module.exports = router;