/**
 * Beer class for handling specific beer items
 * @param {String} name   Name of the Beer
 * @param {String} brand  Brand of the Beer
 * @param {String} style  What style of Beer
 * @param {Number} abv    Alcohol by volume
 * @param {String} origin Location of brewer
 */
var Beer = function(name, brand, style, abv, origin){
  this.name = name;
  this.brand = brand;
  this.style = style;
  this.abv = abv;
  this.origin = origin;

  // Pre-render our beer so that
  // we have a DOM element already
  // generated to work with.
  this.render();
};

/**
 * Generate a new DOM element to represent this
 * beer on the page.
 * @return {jQuery} jQuery DOM element
 */
Beer.prototype.render = function() {
  // Optimize the render method by only
  // generating a new element if one hasn't
  // already been generated
  if(!this.el){
    this.el = $('#tpl-beer')
      // Copy the template
      .clone()
      // Clear out the ID attribute
      .attr('id', null)
      // Add a reprensentative class
      .addClass('beer');
  }

  // Set the values to match the data
  this.el.find('.beer-name').text(this.name);
  this.el.find('.beer-brand').text(this.brand);
  this.el.find('.beer-style').text(this.style);
  this.el.find('.beer-abv').text(this.abv);
  this.el.find('.beer-origin').text(this.origin);

  return this.el;
};


/**
 * Class for maintaining individual lists
 * of beers
 */
var Brewpedia = function(name){
  this.name = name;
  this.beers = [];

  this.render();
};

/**
 * Add a beer to the given Brewpedia
 * @param {Beer} beer Beer to add to the list
 */
Brewpedia.prototype.addBeer = function(beer) {
  this.beers.unshift(beer);

  // Re-render the list of beers
  this.renderBeerList();
};

/**
 * Generate a DOM element to represent this
 * specific Brewpedia instance
 * @return {jQuery} jQuery object to represent brewpedia
 */
Brewpedia.prototype.render = function() {
  if(!this.el) {
    this.el = $('#tpl-brewpedia')
      .clone()
      .attr('id', null)
      .addClass('brewpedia');
  }

  // Set the values to match the data
  this.el.find('.brewpedia-name').text(this.name);

  // Also render the beer list
  this.renderBeerList();

  return this.el;
};

/**
 * Helper for rendering and updating the beer list
 */
Brewpedia.prototype.renderBeerList = function() {
  // Goal: transform a list of beer objects into
  //       a list of DOM elements that can be appended
  var beerElements = this.beers.map(function(beer){
    return beer.render();
  });

  this.el.find('.beer-list').append(beerElements);
};


// Define a sample beer
var deschutes = new Beer(
  'Deschutes Black Butte Porter',
  'Deschutes',
  'Porter',
  5.2,
  'Oregon'
);

var truth = new Beer(
  'Truth',
  'Rhinegeist',
  'IPA',
  7.2,
  'Cincinnati'
);

// Test rendering it on the page
//    console.dir(deschutes);
//    $('body').append( deschutes.render() );


// Our root brewpedia for containing beers
var mikesBeers = new Brewpedia('Mike\'s Beers');

mikesBeers.addBeer(deschutes);
mikesBeers.addBeer(truth);

console.dir(mikesBeers);
$('body').append( mikesBeers.render() );



var pbr = new Beer(
  'PBR',
  'Russia',
  'Water',
  4.75,
  'Russia'
);

var malindasBeers = new Brewpedia('Malinda\'s Beers');
malindasBeers.addBeer(pbr);
$('body').append( malindasBeers.render() );
