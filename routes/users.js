var express = require('express');
var router = express.Router();
var passport = require('../config/passport');
var Users = require('../models/users');


router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/profile',
  failureRedirect: '/signup'
}));

router.get('/users', (req, res) => {
  Users.getAll().then((users) => {
    res.render('users', { users: users });
  });
});

module.exports = router;
