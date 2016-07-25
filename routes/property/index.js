var express = require('express');
var router = express.Router();
var queries = require('../../lib/queries.js')
/* GET home page. */
router.get('/sales', (req, res, next) => {
  res.render('charts/property/sales/index')
})


router.get('/salesData', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  queries.getSalesData().then((resp) => {
    res.json(resp)
  })
});

module.exports = router;
