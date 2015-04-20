/*
  Challenge:

  Create a Quote class that has two properties:
    - text
    - author
  The constructor should take the values in as
  parameters.

  Create an instance of the Quote class and store
  it in a variable. Then console.log the text and
  author values separately.

  BONUS: Define default parameters if none are passed.
*/

var Quote = function(text, author){
  // Shorthand default parameters.
  // This is a nice side-effect of the ||
  // operator.
  text = text || 'no quote text';
  author = author || 'anonymous';

  // Longer, but means more control:
  if(text === undefined){
    text = 'no quote text';
  }
  if(author === undefined){
    author = 'anonymous';
  }

  // Now set up the instance here
  this.text = text;
  this.author = author;
};

// Instance of a quote:
var myQuote = new Quote('You miss 100% of the shots you don\'t take - Wayne Gretzky', '- Michael Scott');
console.log(myQuote.text, myQuote.author);

// What if I don't pass any arguments to the constructor?
var emptyQuote = new Quote('This is a good quote');
console.log(emptyQuote);
