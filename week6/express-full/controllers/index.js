// This is just a simple object with methods on it
// that are exported to our app.js file and used by
// referencing the methods in our route handlers.
var indexController = {
	index: function(req, res) {
		res.render('index');
	},

	contact: function(req, res){
		res.send('Contact page');
	}
};

module.exports = indexController;
