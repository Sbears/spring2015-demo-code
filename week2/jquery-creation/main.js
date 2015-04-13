// SHORTHAND FOR DOCUMENT READY:
// $(function(){});
$(document).on('ready', function() {

  // Generate a dom element instead of selecting
  // existing ones (in memory):
  var myDiv = $('<div></div>')
    .addClass('my-div')
    .text('MyDiv')
    .css('color', 'red');

  console.log(myDiv);

  // Append:
  $('h3').append('I am appended');

  // Accepts html as well
  //  $('h3').append('<em>html is ok</em>');
  // Or pre-created dom elements
  //  $('h3').append(myDiv);

  // Prepend:
  $('h3').prepend('I am prepended');

  // Before:
  $('h3').before('I am before');

  // After:
  $('h3').after('I am after');

  // Clone (copy):
  var myDivClone = $(myDiv).clone();
  $('h3').after(myDivClone);

  // Why clone?
  $('h3').before(myDiv);
  $('h3').after(myDiv);

  // Remove an element:
  $('h3').remove();

  // Empty a container:
  $('.container').empty();
});
