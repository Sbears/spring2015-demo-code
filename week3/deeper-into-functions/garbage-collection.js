var a = {
  b: 10
};

// "a" has a brand new value, leaving
// the original object totally inaccessible.
// Garbage collector is all like "it's gone now"
a = 'test';

// What about properties on objects?
var a = {
  b: {
    inner: 'Inside an object'
  },
  d: 'a string of epic proportions'
};
var c = a.b;
a = 'test';

// a.b, no. a.d, no.
// but c.inner? yes!
console.log(a, c);
