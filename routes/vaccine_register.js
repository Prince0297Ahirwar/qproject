const express = require('express');

const router = express.Router();
const vaccineRegisterController = require('../controllers/vaccine_register_controller');

router.get('/', vaccineRegisterController.vaccine_register);
module.exports = router;