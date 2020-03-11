var express = require('express');
var router = express.Router();
var gjStation=require("../models/gjbusStation")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index")
});

module.exports = router;
