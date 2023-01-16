var express = require('express');
var router = express.Router();

/* GET css page. */
router.get('/', function(req, res, next) {
  res.render('pagcss');
});

module.exports = router;
