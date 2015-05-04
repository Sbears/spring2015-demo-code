// console.log(process.argv);

/**
 * In Class Challenge:
 * 		Write a node application that reverses a string
 * 		that has been given via the command line:
 *
 * 		node reverse.js "this should be reversed"
 * 		> desrever eb dluohs siht
 */

var inputString = process.argv[2];

var reversed = inputString
  .split('')
  .reverse()
  .join('');

console.log(reversed);

// setTimeout(function(){}, 1000);
