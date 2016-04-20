const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Users = require('../models/users');

module.exports = passport;

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  Users.findById(user.id).then((user) => {
    done(null, user)
  }).catch((err) => {
    done(err);
  });
});


passport.use('local-signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, (req, email, password, done) => {
  Users.findByEmail(email).then((user) => {
    if (user) {
      return done('this email is already in use, try another buddy');
    }
    else {
      Users.createUser({email: email, password: password }, (err, user) => {
        if (err) {
          done(err);
        }
        return done(null, user);
      });
    }
  });
}));

// =====================================================
// Local log-in
// =====================================================

passport.use('local-login', new LocalStrategy({
  usernameField: 'username',
  password: 'password',
  passReqToCallback: true
}, (req, email, password, done) => {
  Users.findByEmail(email).then((user) => {
    if (!user) {
      return done('no user found');
    }

    Users.authenticateUser(email, password, (err, user) => {
      if (err) {
        return done(err);
      }
      else {
        return done(null, user);
      }
    });
  });
}));
