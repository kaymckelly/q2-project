var express = require('express');
var router = express.Router();
var passport = require('passport');
<<<<<<< HEAD
var knex = require('..db/knex');

function Users() {
  return knex('users');
}

/* GET users listing. */
router.get('/users', function(req, res, next) {
  Users().select().orderBy('id', 'asc').then(function (records) {
    res.render('users', {title: 'Friendface Members'});
  });
});

router.get('/users/new', function(req, res, next) {
  res.render('users/new');
});

router.post('/users', function(req, res, next) {
  Users().insert({
    name: req.body.user_name,
    email: req.body.email,
    location: req.body.location,
    img_url: req.body.img_url,
    blurb: req.body.blurb,
    password_digest: req.body.password_digest
  }).then(function () {
    res.redirect('/users');
  });
});

router.get('/users/:id', function(req, res, next) {
  Users().where({id: req.params.id}).first().then(function (record) {
    res.render('users/profile', {theUser: record});
    //not sure what view is rendering for a selected profile.
  });
});

router.get('/users/:id/edit', function(req, res, next) {
  Users().where({id: req.params.id}).first().then(function (record) {
    res.render('users/edit', {theUser: record});
  });
});

router.post('/users/:id/edit', function(req, res, next) {
  Users().where({id: req.params.id}).first().update({
    name: req.body.user_name,
    email: req.body.email,
    location: req.body.location,
    img_url: req.body.img_url,
    blurb: req.body.blurb,
    password_digest: req.body.password_digest
  }).then(function (record) {
    res.redirect('/users');
  });
});

router.post('/users/:id/delete', function(req, res, next) {
  Users().where({id: req.params.id}).first().del().then(function (record) {
    res.redirect('/users');
  });
});

router.get('/signup', function(req, res, next) {
  res.render('signup');
});

=======


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { title: 'Friendface Users' });
});

// from Kay - I changed this to reflect the naming structure of the register.jade page I created for the sign up form
router.get('/register', function(req, res, next) {
  res.render('register');
});

// from Kay - still needs to be changed to correct path
>>>>>>> 4e3df63947e430ec4c2c0e3b1268ba60d27e291b
router.post('/signup',
  passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup'
  }));

module.exports = router;
