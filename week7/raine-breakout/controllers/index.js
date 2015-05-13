var Grape = require('../models/Grape.js')

var indexController = {
	index: function(req, res) {

		Grape.find({}, function(err, grapes) {

			if(err) { 
				console.log(err);
				return res.send(500)
			}
			res.render('index', {
				grapes: grapes
			});
		});

	}
};

module.exports = indexController;