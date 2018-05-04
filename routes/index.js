var express = require('express');
var router = express.Router();
var db = require('../queries');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'lORRAN' });
});

router.post('/api/parceiros', db.createParceiros);

console.log('\n' + '***************************************************');
console.log('REST API Made By Lorran for partner web application');
console.log('***************************************************' + '\n');

module.exports = router;
