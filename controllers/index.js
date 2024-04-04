var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Group 3 Tutorial' });
});

// shopping page
router.get('/shopping', (req, res) => {
  res.render('shopping');
});

module.exports = router;
