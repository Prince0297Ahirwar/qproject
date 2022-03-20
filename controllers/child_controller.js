const Child = require('../models/child');
const Vaccine = require('../models/vaccine');
const nodemailer=require('nodemailer');
const WebSocket = require('ws');
   

module.exports.create = async function(req, res){
    Child.create({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        mobile: req.body.mobile,
        uniqueId: req.body.uniqueId,
        fatherName: req.body.fatherName,
        history: req.body.history,
        dob: req.body.dob,
        nextSchedule: req.body.nextSchedule,
        nextVaccine: req.body.nextVaccine
        
    }, async function(err, product){
        if(err){ 
            req.flash('error', 'error in creating a product');
            return;
        }
        req.flash('success', 'Product published!');
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
        const response = await smtpTrans.sendMail(mailOpts);
        // hardware code
        const WebSocket = require('ws');
        // const serverAddress = "ws://127.0.0.1:5000";
        const serverAddress = "ws://192.168.158.245";

        const ws = new WebSocket(serverAddress, {
            headers: {
                "user-agent": "Mozilla"
            }
        });

        ws.on('open', function() {
            ws.send("Hello from PCamp!");
        });

        ws.on('message', function(msg) {
            console.log("Received msg from the server: " + msg);
        });
        return res.redirect('back');
    });
}


// sign in and create a session for the user
module.exports.createSession = function(req, res){
    return res.redirect('child_loggedin');
}

// to destroy session
module.exports.destroySession = function(req, res){
    req.logout();
    req.flash('success', 'You have logged out!');

    return res.redirect('/');
}