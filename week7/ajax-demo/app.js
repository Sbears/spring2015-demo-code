var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var apiController = require('./controllers/api.js');

// Make sure we connect to the database too!
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/spring2015-ajax-demo');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);

// Our api controller handlers
app.post('/addMonster', apiController.addMonster);
app.get('/getMonsters', apiController.getMonsters);

var server = app.listen(8820, function() {
	console.log('Express server listening on port ' + server.address().port);
});
