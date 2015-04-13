var makeAdder = function(x){
  var test = 'test: ' + x;
  return function(y){
    console.log(test);
    return x + y;
  };
};

var add5 = makeAdder(5);
console.log(add5(10));

var add10 = makeAdder(10);
console.log(add10(10));




console.log('----------------------');


// This is bad. Lots of repetition!
/*
var make5Car = function(color){
  var wheels = 5;
  console.log(
    'This car has ' + wheels +
    ' wheels and is ' + color
  );
};
var make10Car = function(color){
  var wheels = 10;
  console.log(
    'This car has ' + wheels +
    ' wheels and is ' + color
  );
};
make5Car('green');
make5Car('red');
make5Car('orange');
make10Car('blue');
*/


/*
var makeCar = function(wheels){
  var makeColor = function(color){
    console.log(wheels, color);
  };
  makeColor('green');
};

makeCar(5);
makeCar(10);
*/



var makeCar = function(wheels){
  var makeColor = function(color){
    console.log(wheels, color);
  };
  // makeColor('green');
  return makeColor;
};

console.log(makeCar);
var wheels4 = makeCar(4);
console.log(wheels4);
wheels4('blue');
wheels4('teal');
makeCar(20)('blue');

var wheels18 = makeCar(18);
wheels18('chartreuse');
wheels18('peru');

// Wut...
var aF = function(a){
  return function(b){
    return function(c){
      return a + b + c;
    };
  };
};

var result = aF('a')('b')('c');
console.log(result);

var temp = aF(10);
var temp2 = temp(5);
console.log(temp2(20));
console.log(temp2(100));
console.log(temp(100)(50));
