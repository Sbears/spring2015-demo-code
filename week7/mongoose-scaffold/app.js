var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

// Require our database module and make sure to
// connect to the database itself. We only have to do
// this once per application, so the rest of the code
// will be able to use the same connection.
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/spring2015-scaffold');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);

// We just added a few helper routes to make our app go
app.post('/catAdd', indexController.catAdd);
app.get('/delete/:catId', indexController.catDelete);

var server = app.listen(6586, function() {
	console.log('Express server listening on port ' + server.address().port);
});
