var express = require('express');
var router = express.Router();
var queries = require('../lib/queries.js')
/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  queries.getSalesData().then((resp) => {
    res.json(resp)
  })
});

module.exports = router;
