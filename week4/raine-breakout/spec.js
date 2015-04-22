// client-side templating example

// listing prototypes
// call, apply, bind
// DOM <-> Model Objects
// map, filter, reduce

// inheritance review
// this

/*
REQUIREMENTS/FUNCTIONAL SPEC
============================
Design a program that produces a delicious cup of coffee.
Different brewing methods take different amounts of time.
Brewing time is proportional to size of drink.

	Submit an order of drinks
	Check the status of a drink
	Check the status of a whole order

*/

class Drink
	Number size
	String status
		"done"
		"not done"
	String type
		"espresso"
		"coffee"
		"latte"
		"cortado"
	String brewingMethod
		"drip"
		"pourover"
		"frenchpress"
		"chemex"
		"espresso"
		null
	function start

/*
Inheritance: A dog "is a" animal
	i.e. The Dog class inherits from the Animal class
			 Dog.prototype = new Animal()

Containment: A dog "has a" name/color/numLegs/cleanliness
	i.e. The Dog class has a name property
			 this.name = 'fido'
*/

// containment
class Order
	Array drinks
	function getStatus
	function start
	/*
	var drinks = [drinkA, drinkB, drinkC];
	var myDrink = drinkA;
	var drinkMenu = {
		special: drinkA,
		normal: drinkB
	}
	*/



