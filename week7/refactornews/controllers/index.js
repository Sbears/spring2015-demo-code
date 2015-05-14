var Post = require('../models/post.js');

var indexController = {
	index: function(req, res) {
		//res.render('index');

    Post.find({}, function(err, results){
      res.render('index', {
        posts: results
      });
    });
    
	}
};

module.exports = indexController;
