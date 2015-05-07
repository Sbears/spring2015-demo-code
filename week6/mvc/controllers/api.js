// Need access to the model
var exoticPet = require('../models/exoticPet.js');

var apiController = {
  /**
   * Route handler for adding a new pet via client-side form
   *
   * @param {object} req Request data from server
   * @param {object} res Response data from server
   */
  addPet: function(req, res){
    exoticPet.addPet(req.body.name, req.body.imageUrl);
    res.redirect('/');
  },

  /**
   * Route handler for removing a pet via client-side form
   *
   * @param {object} req Request data from server
   * @param {object} res Response data from server
   */
  deleteAnimal: function(req, res){
    exoticPet.removePet(req.params.animalName);
    res.redirect('/');
  }
};

// We need to make sure the controller methods
// are available elsewhere.
module.exports = apiController;
