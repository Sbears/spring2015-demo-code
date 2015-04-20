// Define a base class:
var Vehicle = function(color){
  console.log('VehicleConstructor()', this);
  this.color = color;
  console.log('VehicleConstructor Complete:', this);
};

// Add the 'move' method to the base class
Vehicle.prototype.move = function(){
  console.log(this.color + ' vehicle is MOVING!!');
};

// Define a generic vehicle instance example:
//    var genericVehicle = new Vehicle('blue');
//    genericVehicle.move();


// Define a sub-class:
var Car = function(color, make){
  console.log('CarConstructor()', this);
  // Invoke the parent class' constructor
  // on the given instance of this class.
  // Be sure to pass along any required
  // parameters to that constructor function.
  Vehicle.call(this, color);

  this.make = make;
  console.log('CarConstructor Complete:', this);
};

// The constructor will make sure that all
// the logic in the parent-class constructor
// is run. Now we need to carry over the
// rest of the parent class' prototype:
Car.prototype = new Vehicle();

// Reset the prototype constructor property:
Car.prototype.constructor = Car;


// All custom methods for Cars only:
Car.prototype.vroom = function(){
  console.log(
    'the ' + this.color + ' ' + this.make + ' ' +
    'is going really fast now!'
  );
};

// We can also 'override' base class functionality
Car.prototype.move = function(){
  console.log('This method overrides the base class.');
};

// Testing the Car class with an instance:
var myCar = new Car('green', 'subaru');
console.dir(myCar);
myCar.vroom();
