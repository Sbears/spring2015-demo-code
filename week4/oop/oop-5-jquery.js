/*
  Challenge:

  Update your Quote class to include a changeText
  method that, given new text as a parameter,
  will update both the text of the instance
  as well as change the rendered dom elements value.
*/


var Quote = function(text, author){
  this.text = text;
  this.author = author;
};

Quote.prototype.countWords = function(){
  return this.text.split(' ').length;
};

Quote.prototype.create = function(){
  // Here, we break up the DOM element into sub components.
  // One for the text of the quote and one for the author.
  // That way, later, we can target them uniquely without
  // changing other parts of the DOM.
  var quoteText = $('<span class="quote-text">')
    .text(this.text);
  var quoteAuthor = $('<span class="quote-author">')
    .text(this.author);

  // Now we generate the containing div and
  // append our components.
  this.el = $('<div>')
    .append(quoteText, ' - ', quoteAuthor);

  // Finally, return everything back to the caller
  return this.el;
};

Quote.prototype.changeColor = function(color){
  // assume that create has already been called:
  this.el.css('color', color);
};

Quote.prototype.changeText = function(text){
  this.text = text;
  // We could do things this way, but our
  // carefully built 'create' method DOM elements
  // will be destroyed. Let's be more specific instead
  //    this.el.text(this.text + ' - ' + this.author);

  // We can directly target the '.quote-text' element
  // that exists inside the element that 'this.el'
  // refers to. It's still unique to the instance.
  this.el.find('.quote-text').text(this.text);
};

var myQuote = new Quote(
  'You miss 100% of the shots you don\'t take',
  'Wayne Gretzky'
);

// let's append our 'created' dom element
$('body').append( myQuote.create() );

// Changing the text via this method
// will update both the instance AND
// the created DOM element
myQuote.changeText('Quote has changed');
