const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Users = require('../models/users');

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((user, done) => {
    Users.findById(user.id, (err, user) => {
      done(null, user)
    });
  });

  // =====================================================
  // Local sign-up
  // =====================================================

  passport.use('local-signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
  }, (req, email, password, done) => {

    Users.findByEmail(email).then((err, user) => {
      if (err) {
        return done(err);
      }

      if (user) {
        return done(null, 'this email is already in use, try another buddy');
      }
      else {
        Users.createUser({email: email, password: password }).then((user) => {
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

module.exports = passport;
