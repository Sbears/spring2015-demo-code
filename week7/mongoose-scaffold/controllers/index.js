// We need access to the model we created in the
// models directory. This allows us to find, remove, update,
// and create cats
var Cat = require('../models/cat.js');

var indexController = {
	index: function(req, res) {

    // 1) Ask the DB for a list of all cats
    Cat.find({}, function(err, documents){

      // 2) Call the render method and forward
      //    the list of cats on to jade
      res.render('index', {
        cats: documents
      });

    });

	},

  catAdd: function(req, res){

    // Helpful to just pull the data right
    // out of the post
    var catData = req.body;

    // Have to clean up our comma separated list of traits
    // and convert them into an array
    var traits = catData.traits.split(',').map(function(trait){
      return trait.trim();
    });

    // We create a new instance of the Cat model
    // by passing along the values we want each
    // property to have.
    var cat = new Cat({
      name: catData.name,
      color: catData.color,
      weight: catData.weight,
      traits: traits,
    });

    // Finally, we ask the cat to save itself
    // into the database
    cat.save(function(err, results){
      // When the save is completed, go ahead
      // and tell the browser to head back to the
      // homepage and re-render the list of cats.
      res.redirect('/');
    });

  },

  catDelete: function(req, res){
    //Cat.findById(req.params.catId, function(err, cat){
      //res.send(cat);
    //});

    // This is a mongoose helper that will find a cat
    // by it's given ID and remove it from the DB
    Cat.findByIdAndRemove(req.params.catId, function(err, results){
      // When removal is completed, head back to the
      // homepage to re-render the list of cats
      res.redirect('/');
    });
  }

};

module.exports = indexController;
