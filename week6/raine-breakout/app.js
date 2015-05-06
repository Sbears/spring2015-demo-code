var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

var DerbyPlayer = function(name, alias) {
	this.name = name;
	this.alias = alias;
};

var database = {

	players: [
		new DerbyPlayer('Christina', 'Krusher'),
		new DerbyPlayer('Al\'ia', 'Blade'),
		new DerbyPlayer('Rachel', 'Lazer')
	],

	getTeam: function() {
		return this.players;
	},

	getPlayer: function(playerToFind) {
		return _.findWhere(this.players, { alias: playerToFind })
	}
};

app.get('/', function(req, res) {
	res.render('index', {
		team: database.getTeam()
	});
});

app.get('/schedule/:person', function(req, res) {
	res.render('schedule', {
		_: _,
		person: database.getPlayer(req.params.person)
	});
})

app.get('/book/:person', function(req, res) {
	var time = +req.query.time + 9;
	var date = (new Date()).getDate() + +req.query.date;
	res.render('book', {
		person: database.getPlayer(req.params.person),
		date: date,
		time: time
	});
})

var server = app.listen(5735, function() {
	console.log('Express server listening on port ' + server.address().port);
});
