// Because we'll be working with the database in this
// file, we should require that here
var Monster = require('../models/monsters.js');

var apiController = {

  // Helper for handling submissions to add a new
  // monster to the database
  addMonster: function(req, res){
    var monsterData = req.body;
    // Since the data coming in via req.body matches
    // that of the model we are trying to build,
    // we can simply pass it through
    var newMonster = new Monster(monsterData);

    // We've got a monster instance, now to save
    // it to the DB!
    newMonster.save(function(err, results){
      // When the save is completed, we'll just forward
      // the newly minted database document on to the client
      res.send(results);
    });
  },


  // Handles requests to get a listing of all
  // the monsters in the DB
  getMonsters: function(req, res){
    // First we find them...
    Monster.find({}, function(err, results){
      // Then send them down to the client side!
      res.send(results);
    });
  }
};

module.exports = apiController;
