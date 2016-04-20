var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Friendface' });
});

// register route for Kay's testing purposes
router.get('/register', function(req, res, next) {
  res.render('register');
});

// profile route for Kay's testing purposes
router.get('/profile', function(req, res, next) {
  res.render('profile');
});

// edit route for Kay's testing purposes
router.get('/edit', function(req, res, next) {
  res.render('edit');
});

module.exports = router;
