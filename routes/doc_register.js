const express = require('express');

const router = express.Router();
const docRegisterController = require('../controllers/doc_register_controller');

router.get('/', docRegisterController.doc_register);
module.exports = router;