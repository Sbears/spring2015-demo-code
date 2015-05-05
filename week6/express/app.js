// Require the 'express' module as called out and installed
// in the package.json (using npm install)
var express = require('express');

// Here we initialize the express application
var app = express();

// We also need to tell express what to use as a rendering
// engine. While not entirely important to use quite yet,
// it does tell the system what to do when it encounters
// a call to 'res.render'
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

// This is a route handler that will decide what
// to do when a user comes in at that url. If the
// incoming url is a match, the function will be
// used to dictate the logic to be run.
app.get('/', function(req, res) {
  // In this case we'll be using the built-in render
  // method to load in a jade file and send down
  // the compiled HTML
	res.render('index');
});

// Another route handler, this time for any 'get' requests
// for the '/about' page.
app.get('/about', function(req, res){
  // Send is a shortcut for just sending down some data. In
  // this case a string.
	res.send('Hello about page!');
});

var counter = 0;
// When rendering the '/contact' page, we want to send
// down the updated value for our counter.
app.get('/contact', function(req, res){
  // Be warned: res.send is polymorphic. This means
  // it will do some analysis of our values we are sending.
  // If the first thing it receives is a number, it will send
  // that down as the status code (see 200, 404, etc). Make sure
  // you convert the number to a string or look at the express documentation
  // for more information about 'send'
	res.send('Counter: ' + counter);
	counter++;
	// can also prefix: ++counter
});

// Lastly, we start the server and attach it to the given port!
var server = app.listen(9082, function() {
	console.log('Express server listening on port ' + server.address().port);
});
