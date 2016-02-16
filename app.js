var PORT = 3000;

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')

var app = express();

BASE_DIR = path.join(__dirname, './');
var CLIENT_DIR = path.join(BASE_DIR, '/src/');

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/', express.static(CLIENT_DIR));
app.get('/', function(req, res) {
  res.sendFile(path.join(CLIENT_DIR + '/index.html'));
});

app.listen(PORT);
