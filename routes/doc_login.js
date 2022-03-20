const express = require('express');

const router = express.Router();
const docController = require('../controllers/doc_login_controller');

router.get('/', docController.doc_login);
module.exports = router;