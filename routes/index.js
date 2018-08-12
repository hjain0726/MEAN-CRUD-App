var express = require('express');
var path = require("path");
var router = express.Router();
var absPath = path.join(__dirname, "../public");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.sendFile(absPath + '/index.html');
});


module.exports = router;
