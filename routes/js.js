var express = require('express');
var router = express.Router();

/* GET js page. */
router.get('/', function(req, res, next) {
  res.render('pagjs');
});

module.exports = router;
