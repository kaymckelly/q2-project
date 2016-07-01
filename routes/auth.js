const express = require('express');
const router = express.Router();
const passport = require('../config/passport');

router = express.Router();

router.post('/', passport.authenticate('local-login', {
  failureRedirect: '/'
}), (req, res) => {
  res.redirect('/profile/' + req.user.id);
});

router.get('/logout', (req, res) => {
  req.session = null;
  req.logout();
  res.redirect('/');
})

module.exports = router;
