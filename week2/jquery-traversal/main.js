$(document).on('ready', function() {

  // Listen for purchase requests
  $('.product-purchase').on('click', function(){
    // Current context
    console.log(this);

    // Convert to jQuery wrapped object
    var $this = $(this);

    // Check out the parent element (up)
    console.log('Parent:', $this.parent());

    // Try to avoid complex parent parent parent things
    console.log('Parent parent parent...:', $this.parent().parent().parent());

    // Check all parent elements until a match
    // or the document
    console.log('Closest:', $this.closest('.product'));

    // Come back down, looking for the h2
    var $product = $this.closest('.product');
    console.log('Find:', $product.find('h2'));

    // Print out our final value to console
    var $title = $product.find('h2');
    console.log('The Product:', $title.text());
  });

  // Using "each" to traverse a result set
  $('.product').each(function(index, element){
    $(this).find('h2').text('HAHA NO PRODUCT ' + index);
  });

});
