for(var i = 0; i < 5; i++){
  console.log('in loop:', i);
}
console.log('out of loop:', i);

console.log('----------------');

for(var i = 5; i > 0; i--){
  console.log('in loop:', i);
}
console.log('out of loop:', i);

console.log('----------------');

for(var i = 0; i < 10; i+=2){
  console.log('in loop:', i, i * 100);
}
console.log('out of loop:', i);

console.log('----------------');

// Leads to an infinite loop by re-using
// the same incrementer variable in a
// nested loop!
//
//
// var BREAKER = 0;
//
// for(var i = 0; i < 10; i++){
//   console.log('i:', i);
//
//   for(var i = 0; i < 2; i++){
//     console.log('other i:', i);
//   }
//   console.log('after loop:', i);
//
//   BREAKER++;
//   if(BREAKER > 5){break;}
// }

var runningCount = 0;
for(var i = 0; i < 3; i++) {
  for(var k = 0; k < 3; k++) {
    for(var x = 0; x < 3; x++){
      console.log(runningCount, i, k, x);
      runningCount++;
    }
    console.log('inner iteration complete');
  }
  console.log('outer iteration complete');
}
console.log('all loops completed');

console.log('----------------');

var data = [
  [1, 2],
  ['a', 'b', 'c', 'x'],
  ['d', 'e', 'f']
];
for(var i = 0; i < data.length; i++){
  console.log(i, 'outer:', data[i]);
  for(var k = 0; k < data[i].length; k++){
    console.log(k, 'inner:', data[i][k]);
  }
}
