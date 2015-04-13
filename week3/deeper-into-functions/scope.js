// This variable is defined in
// the global scope since it
// doesn't actually sit inside
// any functions.
var test = 'test string';

// Each function we write
// creates a new scope
var testFunc = function(){
  // Hides inherited parent-scope
  var test = 'not a test string anymore';

  console.log(test);

  var innerFunc = function(){
    // Hides (again) inherited parent scope
    var test = 'i don\'t know anymore…';
    console.log(test);
  };
  innerFunc();
};

testFunc();
console.log(test);
