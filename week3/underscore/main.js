var nums = [1, 2, 5];
// goal: [1, 4, 25]
var results = _.map(nums, function(num){
  return num * num;
});
console.log('Map:', results);


// Challenge: reduce
// 'National Aeronautics Space Administration'
// goal: 'N.A.S.A.'
var str = 'National Aeronautics Space Administration';
var results = _.reduce(
  str.split(' '),
  function(acronym, word){
    // console.log('reducing:', acronym, word);
    var firstChar = word[0].toUpperCase() + '.';
    return acronym + firstChar;
  },
  ''
);
console.log('Reduce:', results);

// break that ish up:
/*
  var words = str.split(' ');
  var acronymBuilder = function(memo, word){
    var firstChar = word[0].toUpperCase() + '.';
    return memo + firstChar;
  };
  var memo = '';
  var results = _.reduce(words, acronymBuilder, memo);
*/


// Challenge: find
var people = [
  {id: 1, name: 'Chris'},
  {id: 2, name: 'Alex'},
  {id: 3, name: 'Scott'}
];
// goal: find the person object who's id is 2
var person = _.find(people, function(item){
  return item.id === 2;
});
console.log('Find:', person);

// Challenge: pluck
// goal: ['Chris', 'Alex', 'Scott']
var names = _.pluck(people, 'name');
console.log('Pluck:', names);


// Challenge: unique (uniq)
// ['Chris', 'Alex', 'Chris', 'Scott', 'Scott', 'Alex']
// goal: ['Chris', 'Alex', 'Scott']

var names = ['Chris', 'Alex', 'Chris', 'Scott', 'Scott', 'Alex'];
var uniqueNames = _.uniq(names);
console.log('Uniq:', uniqueNames);



// Chaining:

// Awk...
// _.uniq(_.map(_.filter()))

// Less awk...
var results = _.chain(people)
  .pluck('name')
  .map(function(name){ return name.toUpperCase(); })
  .value();

console.log('Chain:', results);


// Challenge: all the things

var photos = [
  {src: 'image1.jpg',   tags: ['happy', 'cat', 'dancing']},
  {src: 'catFace.png',  tags: ['frown', 'cat', 'noplz']},
  {src: 'dog.woof',     tags: ['barking', 'bark', 'barks']},
  {src: 'cat.tapestry', tags: ['happy', 'cat', 'ysplz']}
];

// Goal: get a list of all the unique tags:
//  [
//    'happy', 'cat', 'dancing', 'frown', 'noplz',
//    'barking', 'bark', 'barks', 'ysplz'
//  ]

// pluck -> gets just the values of one property
var allTags = _.pluck(photos, 'tags');
console.log('AllTags:', allTags);

// Array of arrays of string -> array of strings
var justTags = _.flatten(allTags);
console.log('JustTags:', justTags);

// uniq -> needs an array of strings (tags)
var uniqTags = _.uniq(justTags);
console.log('UniqTags:', uniqTags);

// Even easier to write:
var results = _.chain(photos)
  .pluck('tags')
  .flatten()
  .uniq()
  .value();

console.log('Results:', results);
