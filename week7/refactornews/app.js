var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var apiController = require('./controllers/api.js');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/refactornews');

// Run any DB seeds!
require('./models/seeds/postSeed.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);

app.post('/addPost', apiController.addPost);
app.get('/upvote/:postId', apiController.upvote);

var server = app.listen(8206, function() {
	console.log('Express server listening on port ' + server.address().port);
});
