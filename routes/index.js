var express = require('express');
var router = express.Router();
const DB = require('../facades');
const upload = require("../middlewares/uploads")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(req.user);
});

module.exports = router;
