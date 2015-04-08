var people = [];

// people = [
//    {name: 'Chris', color: 'blue'},
//    {name: 'Manny', color: 'red'}
// ]

var shouldContinue = true;
while(shouldContinue){
  var name = prompt('What is the person\'s name?');
  var color = prompt('What is the person\'s fave color?');
  var newPerson = {
    name: name,
    color: color
  };
  people.push(newPerson);
  shouldContinue = confirm('Add another?');
}

console.log('People:', people);

// var names = [];
// for (var i = 0; i < people.length; i++) {
//   names.push(people[i].name);
// }

/**
 * Get all the values of a single property in an
 * array of objects
 * @param  {array} list          Array of objects
 * @param  {string} propertyName Property to acquire
 * @return {array}               All property values
 */
var pluck = function(list, propertyName) {
  var tempResults = [];
  for (var i = 0; i < list.length; i++) {
    tempResults.push(list[i][propertyName]);
  }
  return tempResults;
};

var names = pluck(people, 'name');
console.log(names.join(' and '));

var colors = pluck(people, 'color');
console.log(colors.join(' and '));
