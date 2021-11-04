var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Animal', { title: 'Search results by Animal' });
});

module.exports = router;
