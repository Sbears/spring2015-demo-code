/*
  Classes are a way to help organize complex logic.
  We use them to define blueprints about data, such
  as a Car class. Each car will share properties like
  number of wheels and color, but the individual cars
  themselves will have different values.

  This file shows how to create a simple Cat class
  as well as defining instances of that class.
*/


var Cat = function(color, age){
  // This function is considered a Constructor

  // Set the color property on the
  // new instance to the one given
  // to the constructor.
  this.color = color;
  this.age = age;
};

// Create an instance of a Cat:
var blackCat = new Cat('black', 20);
console.dir(blackCat);

// Another instance:
var orangeCat = new Cat('orange', 15);
console.dir(orangeCat);
