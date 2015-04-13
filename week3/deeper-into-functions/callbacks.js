// Using callbacks:

// Delay a function call by x milliseconds
setTimeout(function(){
  console.log('Timeout completed');
}, 3000);
console.log('after the timeout…');

// Delay a function call by x milliseconds
// and then keep calling it.
var intervalId = setInterval(function(){
  console.log('Interval completed');
}, 1000);
// clearInterval(intervalId); // to stop the interval
