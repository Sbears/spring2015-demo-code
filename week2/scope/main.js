// Declare a variable called "name"
var personName = 'Chris';

// Print out a personName
var printName = function(){
  // "hiding": we have two variables
  // with the same name. It doesn't override
  // the parent one, but instead creates
  // a temporary variable that "hides" access
  // to the parent variable.
  var personName = 'Jenny';

  // Because this is defined inside a child
  // scope, there is no way for us to get
  // direct access to it unless the function
  // returns it in some way.
  var personNumber = '867-5309';

  // Ask the parent(s) scope
  // for information about a variable
  // called "personName"
  console.log('printName():', personName);
  return {
    personNumber: personNumber
  };
};

console.log('personName:', personName);

// Invoke the function
var jenny = printName();

console.log('personName:', personName);

console.log('jenny:', jenny);
