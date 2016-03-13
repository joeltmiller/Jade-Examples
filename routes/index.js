var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/example', function(req, res, next){
  res.render('example', { pageTitle: "Huzzah, Jade!", youAreUsingJade: false});
});

router.get('/sandwiches', function(req, res, next){
  res.send("Are delicious");
});

router.get('/users', function(req, res, next){
  res.send("test");
});

module.exports = router;
