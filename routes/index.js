var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Friendface' });
<<<<<<< HEAD
=======
});

// register route for Kay's testing purposes
router.get('/register', function(req, res, next) {
  res.render('register');
>>>>>>> 4e3df63947e430ec4c2c0e3b1268ba60d27e291b
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
