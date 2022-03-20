const express = require('express');

const router = express.Router();
const childRegisterController = require('../controllers/child_register_controller');

router.get('/', childRegisterController.child_register);
module.exports = router;