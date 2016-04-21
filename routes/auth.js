const express = require('express');
const router = express.Router();
const passport = require('../config/passport');

router = express.Router();

router.post('/', passport.authenticate('local-login', {
  successRedirect: '/profile',
  failureRedirect: '/'
}));

module.exports = router;
