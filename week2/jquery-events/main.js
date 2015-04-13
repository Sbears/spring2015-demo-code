$(document).on('ready', function() {

  console.log('Document is ready');


  // Add an event listener to our button
  var count = 0;
  $('#my-button').on('click', function(){
    console.log('You clicked the button ' + count + ' times. Nice work.');

    // Increment the click count
    count++;

    // This will add another click event to the button
    // every time i click the button! Crazy.
    $('#my-button').on('click', function(){
      console.log('I AM THE SECOND LISTENER!!');
    });

  });


  // Event arguments (take in a single parameter)
  $('#event-args').on('click', function(e){
    console.log(e);

    // Prevent browser from doing the normal thing
    e.preventDefault();

    // Does the same thing as e.preventDefault()
    return false;
  });


  // Multiple buttons...
  $('.btn-multiple').on('click', function(e){
    // Too generic... Gets all the buttons!
    // $('.btn-multiple').text('clicked');

    // console.log(e);
    console.log(e.currentTarget, this);

    // Much better, more specific to the
    // element that actually fired the event.
    $(this).text('clicked');
  });


  // Event Delegation
  /*
  $('.btn-delegate').on('click', function(){
    // When the button is clicked,
    // add another copy to the container
    $('.delegate-container').append(
      '<button class="btn-delegate">BTN</button>'
    );
  });
  */

  $(document).on('click', '.btn-delegate', function(e){
    console.log('delegate:', e);
    $('.delegate-container').append(
      '<button class="btn-delegate">BTN</button>'
    );

    // This is essentially what event
    // delegation does behind-the-scenes:
    // var actual = $(e.target);
    // if(actual.hasClass('btn-delegate')){
    //   $('.delegate-container').append(
    //     '<button class="btn-delegate">BTN</button>'
    //   );
    // }
  });


  // Shorthand helpers:
  // $('button').on('click', function(){})
  $('button').click(function(){
    console.log('clicked');
  });
  
  // Hover is unique:
  // $('button').hover(mouseover, mouseout)
  $('button').hover(function(){}, function(){});
});
