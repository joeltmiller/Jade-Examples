var express = require('express');
var router = express.Router();

function User(name, email){
  this.name = name;
  this.email = email;
}

var localUsers = [ new User("Joel", "joel@primeacademy.io"),
              new User("Casie", "casie@primeacademy.io"),
              new User("Mark", "mark@primeacademy.io")
];



/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('userTemplateFile', {injectedUsers: localUsers});
});

router.get('/add/:id', function(req, res, next) {
    res.send('joel');
});

router.get('/delete/:id', function(req, res, next) {
    res.send('casie');
});

router.get('/update/:id', function(req, res, next) {
    res.send('other');
});

module.exports = router;
