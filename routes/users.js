var express = require('express');
var router = express.Router();
var passport = require('../config/passport');

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

module.exports = router;
