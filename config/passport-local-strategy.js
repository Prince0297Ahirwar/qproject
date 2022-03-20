const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const Doctor = require('../models/doctor');
const Child = require('../models/child');



// authentication using passport
passport.use('doctor' , new LocalStrategy({
        usernameField: 'email',
        passReqToCallback: true
    },
    function(req, email, password, done){
        // find a user and establish the identity
        Doctor.findOne({email: email}, function(err, user)  {
            if (err){
                req.flash('error', err);
                return done(err);
            }

            if (!user || user.password != password){
                req.flash('error', 'Invalid Username/Password');
                return done(null, false);
            }

            return done(null, user);
        });
    }
));

passport.use('child' , new LocalStrategy({
    usernameField: 'email',
    passReqToCallback: true
},
function(req, email, password, done){
    // find a user and establish the identity
    Child.findOne({email: email}, function(err, user)  {
        if (err){
            req.flash('error', err);
            return done(err);
        }

        if (!user || user.password != password){
            req.flash('error', 'Invalid Username/Password');
            return done(null, false);
        }

        return done(null, user);
    });
}
));


// serializing the user to decide which key is to be kept in the cookies
// passport.serializeUser(function(user, done){
//     done(null, user.id);
// });

passport.serializeUser((user, done) => {
    done(null, { _id: user.id, role: user.role });
});

// deserializing the user from the key in the cookies
// passport.deserializeUser(function(id, done){
//     Doctor.findById(id, function(err, user){
//         if(err){
//             console.log('Error in finding user --> Passport');
//             return done(err);
//         }

//         return done(null, user);
//     });
// });

passport.deserializeUser(function(id, done){
    if(id.role === 'doctor'){
    Doctor.findById(id, function(err, user){
        if(err){
            console.log('Error in finding user --> Passport');
            return done(err);
        }

        return done(null, user);
    });
}else{
    Child.findById(id, function(err, user){
        if(err){
            console.log('Error in finding user --> Passport');
            return done(err);
        }

        return done(null, user);
    });
}
});

// passport.deserializeUser(function(user, done) {
//     if(user!=null)
//       done(null,user);
//   });


// check if the user is authenticated
passport.checkAuthentication = function(req, res, next){
    // if the user is signed in, then pass on the request to the next function(controller's action)
    if (req.isAuthenticated()){
        return next();
    }

    // if the user is not signed in
    return res.redirect('/doc_login');
}

passport.setAuthenticatedUser = function(req, res, next){
    if (req.isAuthenticated()){
        // req.user contains the current signed in user from the session cookie and we are just sending this to the locals for the views
        res.locals.user = req.user;
    }

    next();
}



module.exports = passport;