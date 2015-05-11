var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/spring2015-mongoose');

var Cat = mongoose.model('cat', {
  name: String,
  age: Number
});

/*var kitten = new Cat({
  name: 'Mittens',
  age: 100000
});

kitten.save();*/

Cat.find({}, function(err, documents){
  console.log('Err:', err);
  console.log('documents:', documents);
});
