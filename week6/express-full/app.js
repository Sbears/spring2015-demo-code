var express = require('express');

// NEW: This will allow our express application to handle
//      any incoming form data sent via 'post' requests.
var bodyParser = require('body-parser');

// NEW: We'll talk more about MVC structure later, but this
//      is just a reference to an exported object in a separate
//      file to help with organization.
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

// NEW: The express static method is a helper that comes with
//      express to make serving our static files (css, images, etc)
//      to the client much easier. Normally we'd have to manually
//      create separate routes for each public file we want,
//      or at least create a main route that is dynamic. This
//      does that for us.
app.use(express.static(__dirname + '/public'));

// NEW: The bodyParser we required above needs to be injected
//      into that chain of execution. If no static file is sent,
//      this will be run and will check to see if there is any
//      form data to parse. If there is, we will be able to access
//      it in our handlers via 'req.body'
app.use(bodyParser.urlencoded({extended: false}));

// Our route handlers which are using our separate controller.
app.get('/', indexController.index);
app.get('/contact', indexController.contact);

var server = app.listen(9382, function() {
	console.log('Express server listening on port ' + server.address().port);
});
