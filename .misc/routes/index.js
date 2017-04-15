var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/createsymptom', function(req, res) {
  res.render('createsymptom', null);
});

router.get('/createtreatment', function(req, res) {
  res.render('createtreatment', null);
});

module.exports = router;
