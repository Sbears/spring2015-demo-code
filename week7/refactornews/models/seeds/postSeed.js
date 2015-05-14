// This will seed the database with some starter posts

var Post = require('../post.js');

Post.find({}, function(err, results){
  if(results.length === 0){
    // go ahead and pre-fill some information

    var p1 = new Post({
      title: 'Test Post',
      author: 'Chris',
      url: 'http://refactoru.com',
      description: 'Web development bootcamp!',
      comments: [{
        author: 'Max',
        content: 'I did this thing!'
      }]
    });
    p1.save();

    var p2 = new Post({
      title: 'Cat climbs tree',
      author: 'Chris',
      url: 'http://theoatmeal.com',
      description: 'This cat is hi-lar-ious',
      comments: [{
        author: 'Chris',
        content: 'I swear this is worth it, please like me'
      }]
    });
    p2.save();
  }
});
