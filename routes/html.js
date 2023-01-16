var express = require('express');
var router = express.Router();

/* GET html page. */
router.get('/', function(req, res, next) {
  res.render('paghtml');
});

module.exports = router;
