var express = require('express');
var router = express.Router();
var passport = require('passport');
var knex = require('../db/knex');

function Users() {
  return knex('users');
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  Users().select().orderBy('id', 'asc').then(function (records) {
    res.render('users', {title: 'Friendface Members'});
  });
});

router.get('/new', function(req, res, next) {
  res.render('/new');
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

// router.get('/:id', function(req, res, next) {
//   Users().where({id: req.params.id}).first().then(function (record) {
//     res.render('users/profile', {theUser: record});
//     //not sure what view is rendering for a selected profile.
//   });
// });
//
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
//
// router.post('/:id/delete', function(req, res, next) {
//   Users().where({id: req.params.id}).first().del().then(function (record) {
//     res.redirect('/');
//   });
// });

router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.post('/signup',
  passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup'
  }));

module.exports = router;
