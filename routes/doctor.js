const express = require('express');
const router = express.Router();
const passport = require('passport');

const doctorController = require('../controllers/doctor_controller');
const doc_loggedController = require('../controllers/doc_logged_controller');


router.get('/doc_loggedin',passport.checkAuthentication, doc_loggedController.doc_loggedin);
//router.get('/ordernow', passport.checkAuthentication, usersController.menu);
router.post('/create', doctorController.create);
router.get('/update_child/:id',passport.checkAuthentication,doctorController.updateChild);
router.post('/update/:id',passport.checkAuthentication,doctorController.update);



// use passport as a middleware to authenticate
router.post('/create-session', passport.authenticate(
    'doctor',
    {failureRedirect: '/'},
), doctorController.createSession);

// route to destroy session
router.get('/logout', doctorController.destroySession);



module.exports = router;