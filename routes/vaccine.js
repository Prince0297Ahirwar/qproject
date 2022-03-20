const express = require('express');
const router = express.Router();

const vaccineController = require('../controllers/vaccine_controller');

router.post('/create', vaccineController.create);

module.exports = router;