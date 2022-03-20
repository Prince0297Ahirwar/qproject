const Vaccine = require('../models/vaccine');


module.exports.child_loggedin = function(req, res){

    Vaccine.find({}, function(err, vaccines){
        return res.render('child_loggedin', {
            all_vaccines:  vaccines,
        });
    });

}