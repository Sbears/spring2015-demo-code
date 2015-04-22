// we could define this as a global (or module level) variable
// var brewingTimes = {
// 	drip: 0,
// 	pourover: 3.5,
// 	frenchpress: 6,
// 	chemex: 3.75,
// 	espresso: 3
// };

var Drink = function(size, type, brewingMethod) {

	if(!size) {
		throw new Error('Size must be specified.');
	}

	if(!type) {
		throw new Error('Type must be specified.');
	}

	this.size = size;
	this.status = 'not done';
	this.type = type;
	this.brewingMethod = brewingMethod || Drink.defaultBrewingMethods[this.type];

	/*this.start = function() {

	}*/
}

// define as a "static" property
Drink.defaultBrewingMethods = {
	"espresso": 'espresso',
	"coffee": 'drip',
	"latte": 'espresso',
	"cortado": 'espresso'
};

// define as a "static" property
Drink.brewingTimes = {
	drip: 0,
	pourover: 3.5,
	frenchpress: 6,
	chemex: 3.75,
	espresso: 3
};

Drink.prototype.start = function() {

	var self = this;
	var time = Drink.brewingTimes[this.brewingMethod];

	/*
	if(this.brewingMethod === 'drip') {
		time = 0;
	}
	else if(this.brewingMethod === 'pourover') {
		time = 3.5;
	}
	else if(this.brewingMethod === 'frenchpress') {
		time = 6;
	}
	else if(this.brewingMethod === 'chemex') {
		time = 3.75;
	}
	else if(this.brewingMethod === 'espresso') {
		time = 3;
	}
	*/

	window.setTimeout(function() {
		self.status = 'done';
	}, time * 1000); // (multiply by 60 to get minutes)
}

var Order = function(drinks) {
	this.drinks = drinks;
}

Order.prototype.getStatus = function() {
	/*
	// for loop
	for(var i=0; i<this.drinks.lenth; i++) {
		if(this.drinks[i].status === 'not done') {
			return 'not done'
		}
	}

	return 'done';
	*/

	// filter
	/*
	var doneDrinks = this.drinks.filter(function(drink) {
		return drink.status === 'done';
	})

	if(doneDrinks.length === this.drinks.length) {
		return 'done';
	}
	else {
		return 'not done';
	}
	*/

	return this.drinks.every(function(drink) {
		return drink.status === 'done';
	}) ? 'done' : 'not done';
};

Order.prototype.start = function() {
	/*
	for(var i=0; i<this.drinks.length; i++) {
		this.drinks[i].start();
	}
	*/
	this.drinks.forEach(function(drink) {
		drink.start();
	});
};


var myOrder = new Order([
	new Drink(12, 'latte'),
	new Drink(8, 'espresso'),
	new Drink(16, 'coffee', 'frenchpress')
]);

myOrder.start();

var intervalId = window.setInterval(function() {
	var status = myOrder.getStatus();
	console.log(status);
	if(status === 'done') {
		window.clearInterval(intervalId);
	}
},1000);




