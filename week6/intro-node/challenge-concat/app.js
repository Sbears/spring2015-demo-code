/**
 * InClass Challenge:
 * 		Write a node application that concatenates any number
 * 		of files together (without using the built-in append method).
 *
 * 		$ node app.js output.txt input1.txt input2.txt input3.txt....
 *
 * 		This would create the file 'output.txt' and put the contents
 * 		of each loaded input file in, separated by new lines.
 */

var fs = require('fs');

var outputFilename = process.argv[2];
var inputFilenames = process.argv.slice(3);

// console.log(outputFilename);
// console.log(inputFilenames);

// transform the list of filenames into a list of
// their respective contents, then join the final list:
var combined = inputFilenames.map(function(filename){
  return fs.readFileSync(filename, 'utf-8');
}).join('\n');

// Write the combined string to the output file:
fs.writeFileSync(outputFilename, combined);
