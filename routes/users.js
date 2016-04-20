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


// router.post('/', function(req, res, next) {
//   Users().insert({
//     name: req.body.user_name,
//     email: req.body.email,
//     location: req.body.location,
//     img_url: req.body.img_url,
//     blurb: req.body.blurb,
//     password_digest: req.body.password_digest
//   }).then(function () {
//     res.redirect('/');
//   });
// });
//
// router.get('/:id', function(req, res, next) {
//   Users().where({id: req.params.id}).first().then(function (record) {
//     res.render('users/profile', {theUser: record});
//     //not sure what view is rendering for a selected profile.
//   });
// });

// router.get('/:id/edit', function(req, res, next) {
//   Users().where({id: req.params.id}).first().then(function (record) {
//     res.render('users/edit', {theUser: record});
//   });
// });
//
// router.post('/:id/edit', function(req, res, next) {
//   Users().where({id: req.params.id}).first().update({
//     name: req.body.user_name,
//     email: req.body.email,
//     location: req.body.location,
//     img_url: req.body.img_url,
//     blurb: req.body.blurb,
//     password_digest: req.body.password_digest
//   }).then(function (record) {
//     res.redirect('/');
//   });
// });


module.exports = router;
