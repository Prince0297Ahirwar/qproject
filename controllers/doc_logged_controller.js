const Child = require("../models/child");
const Vaccine = require("../models/vaccine");

// module.exports.doc_loggedin = function(req, res){
//     return res.render('doc_loggedin');

// }


module.exports.doc_loggedin = function(req, res){

    Vaccine.find({}, function(err, vaccines){
        Child.find({}, function(err, childs){
        return res.render('doc_loggedin', {
            all_vaccines:  vaccines,
            all_childs: childs 
        });
    })
    });

}