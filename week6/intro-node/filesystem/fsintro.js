// require access to the filesystem helpers
var fs = require('fs');

// Read in a file synchronously using the utf-8 charset
var data = fs.readFileSync('./data.txt', 'utf-8');
console.log(data);

var outData = data .split('').reverse().join('');

// Write out to a file (create if necessary)
fs.writeFileSync('./reversed.txt', outData);
