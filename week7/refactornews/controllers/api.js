var Post = require('../models/post.js');

var apiController = {
  addPost: function(req, res){
    var newPost = new Post(req.body);
    newPost.save(function(err, result){
      res.send(result);
    });
  },

  upvote: function(req, res){
    var postId = req.params.postId;

    Post.findByIdAndUpdate(postId, {$inc: {score: 1}}, {new: true}, function(err, result){
      res.send(result);
    });
  }
};

module.exports = apiController;
