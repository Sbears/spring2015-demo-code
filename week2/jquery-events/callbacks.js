var adder = function(a, b){
  return a + b;
};

var magic = function(c, d, e){
  // adder(5, 10)
  return c(d, e);
};

console.log('Magic:', magic(adder, 5, 10));
