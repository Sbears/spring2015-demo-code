var myNumbers = [1, 5, 10, 50];
// goal: [2, 10, 20, 100]

var doubler = function(num){
  return num * 2;
};

var doubled = myNumbers.map(doubler);

console.log('Map:', myNumbers, doubled);


var names = ['chris', 'mike', 'raphael', 'max'];
// goal: ['sirhc', 'ekim', 'leahpar', 'xam']

var strReverse = function(str){
  return str.split('').reverse().join('');
};

var results = names.map(strReverse);
console.log('Reversed:', names, results);

// Example of a mapping function:
var myMap = function(originalArray, transformFunc){
  var results = [];
  for(var i = 0; i < originalArray.length; i++){
    var transformed = transformFunc(originalArray[i]);
    results.push(transformed);
    // results.push(transform(originalArray[i]));
  }
  return results;
};

var reversedNames = myMap(names, strReverse);


// Looking at Filter:
var birds = [
  {name: 'Emu', doesItFly: false},
  {name: 'Pelican', doesItFly: true},
  {name: 'Vulture', doesItFly: true}
];

var doesItFly = function(bird){
  return bird.doesItFly;
};

var getName = function(bird){
  return bird.name;
};

var birdsThatFly = birds
  .filter(doesItFly)
  .map(getName)
  .map(strReverse);
console.log('Birds:', birds, birdsThatFly);


// Sample of filter:
var myFilter = function(originalArray, conditionFunc){
  var results = [];
  for(var i = 0; i < originalArray.length; i++){
    var conditionResult = conditionFunc(originalArray[i]);
    if(conditionResult){
      results.push(originalArray[i]);
    }
  }
  return results;
};

var results = myFilter(birds, doesItFly);



// Looking at reduce:
var myNumbers = [1, 2, 5, 10];
// goal: 18

var total = function(currentTotal, currentItem){
  return currentTotal + currentItem;
};

var results = myNumbers.reduce(total, 0);
console.log('Reduce:', myNumbers, results);


var lessThan5Reduce = function(current, item){
  if(item < 5) {
    current.push(item);
  }
  return current;
};
var results = myNumbers.reduce(lessThan5Reduce, []);
console.log('Reduce as Filter:', myNumbers, results);



// Foreach:
var names = ['chris', 'mike', 'raphael', 'max'];

var sayName = function(str){
  console.log('Your name is ' + str);
};

var results = names.forEach(sayName);
console.log('Foreach:', results);
