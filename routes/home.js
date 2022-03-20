const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');


router.get('/', homeController.home);
router.get('/home', homeController.home);

router.use('/doc_login', require('./doc_login'));
router.use('/doc_register', require('./doc_register'));
router.use('/child_register', require('./child_register'));
router.use('/vaccine_register', require('./vaccine_register'));
router.get('/patient_login', require('./patient_login'));
router.use('/doctor', require('./doctor'));
router.use('/vaccine', require('./vaccine'));
router.use('/child', require('./child'));

module.exports = router;