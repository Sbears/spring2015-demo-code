// Fewer arguments than parameters...
var manyParams = function(a, b, c){
  // Give a default value to b
  if(b === undefined){
    b = 'default value';
  }

  // Another way to do simple default values
  c = c || 'default for c';

  // Console log the values
  console.log(a, b, c);
};
manyParams('only argument');
manyParams('only argument', 'second argument');
manyParams('only argument', 'second argument', 'third argument');


console.log('-----------------------');


// What about more arguments than parameters?
var fewerParams = function(a){
  console.log(a);

  // We can still get access to all
  // arguments used regardless of whether
  // they are named or not. This
  // is an array-like object
  console.log(arguments);
};
fewerParams(10, 20, 30);
