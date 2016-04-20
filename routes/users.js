var express = require('express');
var router = express.Router();
var passport = require('passport');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { title: 'Friendface Users' });
});

// from Kay - I changed this to reflect the naming structure of the register.jade page I created for the sign up form
router.get('/register', function(req, res, next) {
  res.render('register');
});

// from Kay - still needs to be changed to correct path
router.post('/signup',
  passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup'
  }));

module.exports = router;
