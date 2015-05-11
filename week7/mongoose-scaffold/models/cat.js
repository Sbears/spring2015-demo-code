// We need access to built-in mongoose helpers
var mongoose = require('mongoose');

// Here we define a schema object. This contains
// information about each property we want our
// documents to have. Schemas can also act like
// our OOP classes, so they can receive both
// static and instance (prototype) methods if
// we want to attach them.
var catSchema = mongoose.Schema({
  name: String,
  color: String,
  weight: Number,
  // This is an array of strings
  traits: [String]
});

// Create our model to have an actual connection
// between our schema and the collection in the
// database we've connected to in app.js
var Cat = mongoose.model('cat', catSchema);

// Finally, export the cat model so other files can use it
module.exports = Cat;
