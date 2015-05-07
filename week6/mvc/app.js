var express = require('express');
var bodyParser = require('body-parser');

// Require both of the controllers for our application
var indexController = require('./controllers/index.js');
var apiController = require('./controllers/api.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

// View-specific handlers from indexController
app.get('/', indexController.index);
app.get('/view/:animalName', indexController.view);

// Data-management handlers from our apiController
app.post('/addPet', apiController.addPet);
app.get('/delete/:animalName', apiController.deleteAnimal);

var server = app.listen(5605, function() {
	console.log('Express server listening on port ' + server.address().port);
});
