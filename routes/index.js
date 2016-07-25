var express = require('express');
var router = express.Router();
var queries = require('../lib/queries.js')
/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index')
})
router.get('/salesData', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  queries.getSalesData().then((resp) => {
    res.render('sales/sales', {data: resp})
  })
});

module.exports = router;
