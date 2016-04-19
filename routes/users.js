var express = require('express');
var router = express.Router();
var passport = require('passport');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { title: 'Friendface Users' });


router.get('/signup', function(req, res, next) {
  res.render('signup');

});

router.post('/signup',
  passport.authenticate('local-signup'), {
    successRedirect: '/profile',
    failureRedirect: '/signup'
  });

module.exports = router;
