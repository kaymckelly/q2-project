var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Friendface' });
});

<<<<<<< HEAD
router.get('/', function(req, res, next) {
  res.render('register');
=======
// profile route for Kay's testing purposes
router.get('/profile', function(req, res, next) {
  res.render('profile');
});

// edit route for Kay's testing purposes
router.get('/edit', function(req, res, next) {
  res.render('edit');
>>>>>>> 176f246f239d2e336dc8ea6d97cb8cc79b96c072
});

module.exports = router;
