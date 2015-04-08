console.log(adder(10, 10));
// console.log(subtracter(10, 5)); => ERROR (not defined yet)

function adder(num1, num2) {
  return num1 + num2;
}

// Preferred way to define a function
var subtracter = function(num1, num2){
  return num1 - num2;
};

// whoa man....
// var doThing = function(thing, val1, val2){
//   return thing(val1, val2);
// };
// console.log('thing:', doThing(subtracter, 10, 5));
