var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

// Just some variables that we'll end up sending over
// to jade when it is rendered.
var counterNode = 0;

var users = [
	{ name: 'Chris' },
	{ name: 'Mike' },
	{ name: 'Raphael' }
];

app.get('/', function(req, res) {
  // The 'render' method takes at least one argument: the name of
  // the file to actually use. Behind the scenes, this will load the
  // file using 'fs', run it through the jade compiler, and automatically
  // send the data to the client.

  // When rendering a jade view, we may want to inform the compiler
  // of some other information. In this case, we want to be able to use
  // our counter and user list in the templates. We send those down
  // as an object in the second argument to render.
	res.render('index', {
		counterJade: counterNode,
		usersJade: users
	});

	counterNode++;
});

// This is the 'post' handler for our form (set up in index.jade).
// When that form is submitted, it will send its data here for us to
// do whatever we need with it.
app.post('/formSubmit', function(req, res){
  // Because of bodyParser, we have access to the form data
  // in the 'req.body' property as an object.
	console.log(req.body);

  // Grab the username value from the form...
	var username = req.body.username;

  // Push a new user to the array...
	users.push({
		name: username
	});

	// res.send(req.body);
	
  // Tell the browser to navigate back to the homepage
  // so that it will re-render the list of users!
  res.redirect('/');
});

var server = app.listen(8311, function() {
	console.log('Express server listening on port ' + server.address().port);
});
