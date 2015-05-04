/**
 * InClass Challenge:
 * 		Write a node application that copies a text file
 * 		using command-line arguments:
 *
 * 		$ node app.js input.txt output.txt
 */

var fs = require('fs');

var inputFileName = process.argv[2];
var outputFileName = process.argv[3];

var fileContents = fs.readFileSync(inputFileName, 'utf-8');

fs.writeFileSync(outputFileName, fileContents);
