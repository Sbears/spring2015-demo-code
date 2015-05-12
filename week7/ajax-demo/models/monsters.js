var mongoose = require('mongoose');

// Create a blueprint for the monsters
var monsterSchema = mongoose.Schema({
  name: String,
  scaryFactor: Number
});

// Export the created model connection to our schema
module.exports = mongoose.model('monster', monsterSchema);
