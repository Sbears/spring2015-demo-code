var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
  title: String,
  author: String,
  score: {
    type: Number,
    default: 0
  },
  postedAt: {
    type: Date,
    default: Date.now
  },
  url: String,
  description: String,
  comments: [{
    author: String,
    content: String,
    postedAt: {
      type: Date,
      default: Date.now
    }
  }]
});

module.exports = mongoose.model('post', postSchema);
