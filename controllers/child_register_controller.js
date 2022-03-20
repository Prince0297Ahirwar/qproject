const Vaccine = require("../models/vaccine");

// module.exports.child_register = function(req, res){
//     return res.render('child_register');

// }

// to display vaccines passing vaccine
module.exports.child_register = function(req, res){

    Vaccine.find({}, function(err, vaccines){
        return res.render('child_register', {
            all_vaccines:  vaccines
        });
    });

}