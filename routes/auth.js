const express = require('express');
const router = express.Router();
const passport = require('passport');
const local = require('../config/passport');

router = express.Router();

router.get('/', (req, res) => {
  res.render('login');
})

router.post('/', passport.authenticate('local-login', {
  successRedirect: '/users',
  failureRedirect: '/login'
}));

module.exports = router;
