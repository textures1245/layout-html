var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {
    res.render('index');
  });

app.listen(8000);
console.log('Server is listening on port 8000');

