// Looking at typeof:

console.log(typeof 10);           // -> number
console.log(typeof true);         // -> boolean
console.log(typeof "testing");    // -> string
console.log(typeof [1, 2, 3]);    // -> object
console.log(typeof function(){}); // -> function

var testProp = 20;
if(typeof testProp === "string"){
  console.log('testProp is a string');
} else {
  console.log('testProp isn\'t a string');
}
