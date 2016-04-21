var express = require('express');
var router = express.Router();
var passport = require('../config/passport');
var Users = require('../models/users');


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    next()
  }
  else {
    redirect('/');
  }
}

router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/profile',
  failureRedirect: '/signup'
}));

router.get('/profile', (req, res) => {
  res.render('profile', { user: req.user });
});

router.get('/edit', function(req, res, next) {
  res.render('edit');
});

router.get('/users', (req, res) => {
  Users.getAll().then((users) => {
    console.log(users);
    res.render('users', { users: users });
  });
});

module.exports = router;
