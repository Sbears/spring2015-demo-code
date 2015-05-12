var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);

// Our new handlers for the incoming ajax requests
app.get('/serverTest', indexController.serverTest);
app.post('/clientFormSubmit', indexController.clientFormSubmit);

var server = app.listen(4542, function() {
	console.log('Express server listening on port ' + server.address().port);
});
