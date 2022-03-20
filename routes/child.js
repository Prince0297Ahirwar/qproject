const express = require('express');
const router = express.Router();
const passport = require('passport');

const childController = require('../controllers/child_controller');
const child_loggedController = require('../controllers/child_logged_controller');

router.post('/create', childController.create);
router.get('/child_loggedin',passport.checkAuthentication, child_loggedController.child_loggedin);


// use passport as a middleware to authenticate
router.post('/create-session', passport.authenticate(
    'child',
    {failureRedirect: '/patient_login'},
), childController.createSession);

// route to destroy session
router.get('/logout', childController.destroySession);

module.exports = router;