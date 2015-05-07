// We need access to the data structure in our model
var exoticPet = require('../models/exoticPet.js');

var indexController = {

  /**
   * Route handler for viewing the homepage, which
   * contains a full list of all current pets.
   *
   * @param {object} req Request data from server
   * @param {object} res Response data from server
   */
	index: function(req, res) {
    var allPets = exoticPet.allPets;
		res.render('index', {
      allPets: allPets
    });
	},

  /**
   * Route handler for viewing a single pet
   *
   * @param {object} req Request data from server
   * @param {object} res Response data from server
   */
  view: function(req, res){
    var currentPet = exoticPet.findPet(req.params.animalName);
    res.render('view', currentPet);
    // {name: currentPet.name, slug: currentPet.slug}
  }

};

module.exports = indexController;
