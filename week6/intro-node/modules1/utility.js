var adder = function(a, b){
  return a + b;
};

// We need to 'export' functionality from this
// file. Like the revealing part of the revealing
// module pattern.
module.exports = {
  adder: adder
};
