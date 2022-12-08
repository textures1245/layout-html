var express = require('express');
var app = express();
var $port = 8000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {
    res.render('index');
  });


module.exports = app;
