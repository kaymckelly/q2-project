var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var passport = require('../config/passport');
var Users = require('../models/users');

function Users() {
  return knex('users');
}

function Skills() {
  return knex('skills');
}

router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.post('/signup', passport.authenticate('local-signup', {
  failureRedirect: '/signup'
}), (req, res) => {
  res.redirect('profile/' + req.user.id);
});

router.get('/profile/:id', (req, res) => {
  res.render('profile', { user: req.user });
});

router.get('/profile/:id/edit', (req, res) => {
  const id = req.params.id;

  Users().select().where({ id: id }).first().then((data) => {
    console.log(data);
    res.render('edit', {user: data})
  });
});

router.post('/profile/:id/edit', function(req, res, next) {
  Users().where({id: req.params.id}).first().update({
    name: req.body.user_name,
    email: req.body.email,
    location: req.body.location,
    img_url: req.body.img_url,
    blurb: req.body.blurb,
    password_digest: req.body.password_digest
  }).then(function (record) {
    res.redirect('/');
  });
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



router.get('/users', (req, res) => {
  Users.getAll().then((users) => {
    res.render('users', { users: users, user: req.user });
  });
});


module.exports = router;
