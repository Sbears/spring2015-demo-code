var express = require('express');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
	res.render('index');
});

var port = process.env.PORT || 4343;
var server = app.listen(port, function() {
	console.log('Express server listening on port ' + server.address().port);
});
