const Child = require('../models/child');
const Doctor = require('../models/doctor');
const Vaccine = require("../models/vaccine");
const nodemailer=require('nodemailer');

module.exports.create = function(req, res){
    Doctor.create({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        uniqueId: req.body.uniqueId,
        description: req.body.description,
        password: req.body.password,
        repassword: req.body.repassword,
        hospital: req.body.hospital
    }, function(err, product){
        if(err){ 
            req.flash('error', 'error in creating a product');
            return;
        }
        req.flash('success', 'Product published!');
        return res.redirect('back');
    });
}


module.exports.updateChild = function(req, res){
    Child.findById(req.params.id, function(err, child){
        Vaccine.find({}, function(err, vaccines){
        return res.render('update_child', {
            title: 'Update Child',
            child:  child,
            all_vaccines:  vaccines
        });
    });
});
}

module.exports.update =  function(req, res){
    Child.findByIdAndUpdate(req.params.id, req.body, function(err, child){

        if (err) {console.log(' Error: ', err)}

        child.email = req.body.email,
        child.name = req.body.name,
        child.mobile = req.body.mobile,
        child.fatherName = req.body.fatherName,
        child.history = req.body.history,
        child.nextSchedule = req.body.nextSchedule,
        child.nextVaccine = req.body.nextVaccine
        const smtpTrans = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
              user: process.env.GMAIL_user,
              pass: process.env.GMAIL_password
            }
          })
          const mailOpts = {
            from: process.env.GMAIL_user,
            to: req.body.email,
            subject: 'Vaccination Schedule',
            text: `Your child ${req.body.name} is registered for ${req.body.nextVaccine} vaccine on ${req.body.nextSchedule}.`
          }
        const response = smtpTrans.sendMail(mailOpts);
        req.flash('success', 'Child Updated!');
        return res.redirect('/doctor/doc_loggedin');
    });
}


// sign in and create a session for the user
module.exports.createSession = function(req, res){
    req.flash('success', 'Logged in Successfully');

    return res.redirect('doc_loggedin');
}

// to destroy session
module.exports.destroySession = function(req, res){
    req.logout();
    req.flash('success', 'You have logged out!');

    return res.redirect('/');
}