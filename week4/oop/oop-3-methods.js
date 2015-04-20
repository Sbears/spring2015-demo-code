/*

  There are 2 ways to add methods to each class.

  The first is not ideal because of performance
  reasons. For each instance of the class that is
  created, it will also attach a new copy of the
  method(s). That can take up a large amount of
  memory depending on how many and how large.

  The better way is to attach them to the object
  prototype. This is a shared value amongst all
  instances of the object, which means that even
  if you create 1,000 instances, they will all
  utilize the same function in memory. Much more
  efficient.

*/

// Not so ideal:
/*
var Cat = function(color){
  this.color = color;

  // Define a method on our instances,
  // but because it is in the constructor,
  // each instance will receive a brand new
  // copy of the entire function, which can
  // lead to massive usage of memory
  this.meow = function(){
    console.log(this.color + ' cat says meow!');
  };
};
var myCat = new Cat('black');
myCat.meow();
*/

// Better:
var Cat = function(color){
  this.color = color;
};

// Anything attached to the prototype is 'shared'
// amongst instances.
Cat.prototype.meow = function(){
  console.log(this.color + ' cat says meow!');
};

// The sleep method, like meow, can be called
// on any object that is an instance of the Cat
// class.
Cat.prototype.sleep = function(duration){
  console.log(this.color + ' cat is probably already sleeping, but is willing to continue for ' + duration);
};

var myCat = new Cat('black');

// Here we call our methods:
myCat.meow();
myCat.sleep('100 years');

console.dir(myCat);
