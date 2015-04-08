// working with objects
// loop logic and nested loops
// finding and consuming documentation

/*
primitives: 	simple data type; scalar (Number, String, Boolean, null, undefined)
array: 				compound data type - list of values (anything)
object: 			compound data type - list of properties (a single entity with multiple properties)
*/

literal = a specalized syntax for creating a specific type of object
	124.12
	'don\'t say hello'
	'\n' // newline
	'\t' // tab
	'can\'t'
	"can't"
	true/false
	[]
	{}

var flowerArrangement = {
	color: '#ffff00', 	// property
	price: 6.99,				// name/key: value
	'for': 'Chris',
	giveWater: function() {
		// do something		
	},
	salePrice: 6.99 * discount
	// special characters: ' ', '-', starting with a digit, keywords
};

// SYNTAX
// 1. curly braces are used to create a new object on the spot (object literal)
// 2. key-value pairs are separated by commas, keys and values are separated by colon;


// accessing the value of a property on an object
// *can't use dot syntax if property name has special characters or is a keyword
// *can't use dot syntax if property name is only known via a variable
console.log(flowerArrangement['color']);
console.log(flowerArrangement.color);

console.log(flowerArrangement['for']);

var currentPriceProperty = 'price'

//...
//...

console.log(flowerArrangement[currentPriceProperty])

// adding a new property
flowerArrangement['giftWrapped'] = true;
flowerArrangement.giftWrapped = true;

// setting an existing property
flowerArrangement['giftWrapped'] = false;
flowerArrangement.giftWrapped = false;

// deleting a property
delete flowerArrangement['giftWrapped']
delete flowerArrangement.giftWrapped

// check if a property exists
if('giftWrapped' in flowerArrangement) {

}

var person = {
	name: 'Sam',
	address: {
		line1: '123 South Elm St',
		line2: null,
		city: 'Boulder',
		state: 'CO'
	}
}

