/*
  NAMESPACING
  & PRIVACY
  -----------

  We need ways to be able to protect our code
  since the global namespace/scope is pretty
  volatile.
  Let's see how objects and functions can
  protect our variables and only supply access
  to the things we want!
*/

// These are in the global scope,
// so the more we declare, the more
// fragile our code is!
var name = 'Chris';
var getUsers = function(){
  return ['Chris', 'Max', 'Raphael', 'Mike'];
};

// Encapsulating our data in objects
// helps a bit. We end up with ONE global
// variable instead of many and it helps
// to keep our logic together in one place.
var app = {
  name: 'Chris',
  getUsers: function(){
    return ['Chris', 'Max'];
  }
};
console.log(app.name);
console.log(app.getUsers());

// Still not perfect though, because we
// have very little control over external
// codes' access to our data. Any code in
// the global scope could still reach in
// and adjust values, like `app.name = 'new name'`


// But how might a pattern like this be used?
// Can we use this in our applications now?

/*
  // Here's an example of using a module
  // to help maintain our jQuery-reliant
  // application logic without bloating up
  // our document ready.

  $(document).on('ready', function(){
    app.init();
    app.setupEvents();
    app.renderView($('.container'));
  });
*/

// What about privacy? Still maintaining
// the idea of encapsulation, but CONTROLLING
// the access points. Objects don't do a very
// good job of this, but functions do!

// Revealing Module Pattern:
var appBuilder = function(){

  // Define our private bits. No parent
  // scope of this function can possibly
  // access these values UNLESS we reveal
  // them to the caller of this function.

  var namePrivate = 'Chris';
  var getUsersPrivate = function(){
    return ['Chris', 'Max'];
  };
  var getNamePrivate = function(){
    return namePrivate;
  };

  // The "revealing" part is what the
  // caller of the function will receive
  // as a result:
  return {
    getUsers: getUsersPrivate,
    getName: getNamePrivate
  };
};

// By calling the function and storing the
// result, we have access to only what the module
// developers wanted us to have access to.
var app = appBuilder();
console.log(app.getName());



// Immediately-Invoked Function Expressions (IIFE's):
// Define a function and, in the same breath, invoke it
(function(){})();

// We define the function, which just logs a value,
// and then we immediately call it. No need for an
// intermediate variable.
(function(){
  console.log('Hello world!');
})();

// What about parameters/arguments?
(function(name, shoes){
  console.log('Hello, ' + name);
})('Chris', 'yes');

// No need for the extra variable like in this example
/*
  var printHello = function(name){
    console.log('Hello' + name);
  };
  (printHello)('Chris');
*/


// Let's see how a for loop with an
// asynchronous call works. This
// gives us some strange results.
for(var i = 0; i < 3; i++){
  console.log('Loop:', i);
  setTimeout(function(){
    console.log('Timeout:', i);
  }, 2000);
}
console.log('After Loop:', i);


/*
  i -> 0, 1, 2, 3 (2 seconds) -> 3, 3, 3
*/



// What about with an array of data?
var names = ['Chris', 'Max', 'Alex'];

for (var i = 0; i < names.length; i++) {
  console.log('Loop:', i, names[i]);
  setTimeout(function(){
    console.log('Timeout:', i, names[i]);
  }, Math.random() * 3000);
}
console.log('After Loop:', i);


// Using an IIFE to capture the value of 'i'
var names = ['Chris', 'Max', 'Alex'];

for (var i = 0; i < names.length; i++) {
  console.log('Loop:', i, names[i]);
  (function(loopI){
    setTimeout(function(){
      console.log('Timeout:', loopI, names[loopI]);
    }, Math.random() * 3000);
  })(i);
}
console.log('After Loop:', i);





// Using an IIFE with the revealing module pattern:
var app = (function(actualName){
  var name = actualName;
  var getNames = function(){
    return ['Chris', 'Max'];
  };
  var getAppName = function(){
    return name;
  };

  return {
    getNames: getNames,
    getAppName: getAppName
  };
})('My Awesome Application');
console.log('app:', app, app.getAppName());
