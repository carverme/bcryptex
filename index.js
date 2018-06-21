var express = require('express');
var bodyParser = require('body-parser');
//var ejsLayouts = require('express-ejs-layouts');
var db = require('./models');
var bcrypt = require('bcrypt');
var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public/'));
//app.use(ejsLayouts);


app.get('/', function(req, res) {
  res.render('index');
});

// app.post('/', function(req, res) {
//   var newPassword = req.body.password
//   console.log(newPassword);
//   var ePassword = bcrypt.hash(newPassword, 10, function(err, hash) {
//     console.log(ePassword);
//     res.send(ePassword)
//   });
// });

app.post('/', function(req, res) {
  var newPassword = req.body.password
  console.log(newPassword);
  var ePassword = bcrypt.hashSync('newPassword', 10)
    console.log(ePassword);
    res.send(ePassword)
    if(bcrypt.compareSync('newPassword', ePassword)) {
    console.log('passwords match')
} else {
    console.log('passwords DO NOT match')
}
  });







// Store hash in database









var server = app.listen(process.env.PORT || 3000);
