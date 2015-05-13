var mongoose = require('mongoose');

var carSchema = mongoose.Schema({
  name: String,
  position: {
    left: {
      type: Number,
      default: 0
    },
    top: {
      type: Number,
      default: 0
    }
  },
  rotation: Number,
  imageUrl: String
});

module.exports = mongoose.model('car', carSchema);
