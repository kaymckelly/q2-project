var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Friendface' });
<<<<<<< HEAD
=======
});

router.get('/register', function(req, res, next) {
  res.render('register');
>>>>>>> 4e3df63947e430ec4c2c0e3b1268ba60d27e291b
});

module.exports = router;
