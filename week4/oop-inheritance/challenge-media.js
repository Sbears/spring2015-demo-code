/*

  Challenge:

  Create a Media class that has a name property and a view method that logs "Viewing <media name>".

  Create a Picture class that extends from Media and adds a property for image url and a create method that renders the image to the DOM.

*/

var Media = function(name){
  this.name = name;
};

Media.prototype.view = function(){
  console.log('Viewing ' + this.name);
};

// Testing:
//    var myMedia = new Media('test media');
//    myMedia.view();


var Picture = function(name, imageUrl){
  Media.call(this, name);

  this.imageUrl = imageUrl;
};
Picture.prototype = new Media();
Picture.prototype.constructor = Picture;

Picture.prototype.view = function(){
  this.el = $('<img>')
    .attr('src', this.imageUrl);

  return this.el;
};

// Testing:
var myPicture = new Picture('happy cat', 'http://omgface.com/veryhappy/happy%20cat4.jpg');
// myPicture.view();

$('body').append( myPicture.view() );
