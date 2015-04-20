/*

  Challenge:

  Update your Quote class to include two methods:
    - countWords: Return the number of words in the quote text
    - create: Returns a new DOM element via jQuery to represent the quote

  Log the result of the countWords method on an instance.
  Use jQuery and the create method to append your quote to the page.

*/

var Quote = function(text, author){
  this.text = text;
  this.author = author;
};

Quote.prototype.countWords = function(){
  return this.text.split(' ').length;
};


// Whats unique here is that we actually
// add a new property to the Quote instance
// when this method is called. This means that
// once create is called, we'll have reference
// to the DOM element that was generated in other
// instance methods on the prototype.
Quote.prototype.create = function(){
  this.el = $('<div>')
    .text(this.text + ' - ' + this.author);
  return this.el;
};

// This method makes use of the DOM element
// created in 'create' by accessing it at this.el.
Quote.prototype.changeColor = function(color){
  // assume that create has already been called:
  this.el.css('color', color);
};

var myQuote = new Quote(
  'You miss 100% of the shots you don\'t take',
  'Wayne Gretzky'
);

// See how many words this quote has
console.log(myQuote.text, myQuote.countWords());

// let's append our 'created' dom element
$('body').append( myQuote.create() );

myQuote.changeColor('red');

// Another quote
var testQuote = new Quote('test quote', 'dr. seuss');
$('body').append(testQuote.create());
testQuote.changeColor('blue');
